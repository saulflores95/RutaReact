import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Map, Marker, Popup, TileLayer, Circle, FeatureGroup } from 'react-leaflet'
import { Meteor } from 'meteor/meteor'
import { Geolocation } from 'meteor/mdg:geolocation'
import L from 'leaflet'

export default class OnlineUserMarker extends TrackerReact(Component) {
  constructor () {
    super()

    this.state = {
      subscription: {
        users: Meteor.subscribe('onlineUsers')
      }
    }
  }

  allUsers () {
    return Meteor.users.find()
  }

  updateUserLocation (user, lat, lng, currentStop) {
    console.log(`Lat: ${lat} Lng: ${lng} currentStop: ${currentStop}`)
    Meteor.call('updateUser', user, lat, lng, currentStop)
  }

  distance (lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295    // Math.PI / 180
    var c = Math.cos
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p)) / 2
    // console.log('Distance Between: ', 12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    return 12742 * Math.asin(Math.sqrt(a))
  }

  checker (rutas, usuario) {
    var cantidadDeRutas = rutas.length
    const distance = this.distance()
    let distanceInKm
    var self = this
    let status = 'No ha llegado'
    for (i = 0; i < cantidadDeRutas; i++) {
      let distance = self.distance(rutas[i].latitud, rutas[i].longitud, usuario.latitude, usuario.longitude)
      distanceInKm = distance * 2
      if (distanceInKm > 1.5) {
        status = 'No ha llegado'
      }
      if (distanceInKm <= 1.5) {
        console.log('Distance in Kilometers: ', `${distanceInKm} km from ${rutas[i].text} y ${usuario.emails[0].address}`)
        status = `Llegando:  ${rutas[i].text}`
      }
      if (distanceInKm <= 0.5) {
        console.log(`${usuario.emails[0].address} llego a ${rutas[i].text}`)
        status = ` ${rutas[i].text}`
      }
      return status
    }
  }

  render () {
    const userPosition = Geolocation.latLng()
    var busMarker = L.icon({
      iconUrl: 'https://tickera-wpsalad.netdna-ssl.com/wp-content/themes/tickera/style/img/freebies/icons/events/25.png?x34982',
      iconSize: [80, 55],
      popupAnchor: [0, -10]
    })
    var self = this
    return (
      <div>
        {this.allUsers().map((user) => {
          this.updateUserLocation(user, userPosition.lat, userPosition.lng, this.checker(this.props.rutas, user))
          const lat = parseFloat(user.latitude)
          const lon = parseFloat(user.longitude)
          const distance = this.distance()
          return (
            <div key={user._id}>
              <Marker icon={busMarker} position={[lat, lon]}>
                <Popup>
                  <h5>{user.emails[0].address}</h5>
                </Popup>
              </Marker>
            </div>
          )
        })}
      </div>
    )
  }
}
