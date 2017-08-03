import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Map, Marker, Popup, TileLayer, Circle, FeatureGroup } from 'react-leaflet';
import { Meteor } from 'meteor/meteor';
import { Geolocation } from 'meteor/mdg:geolocation';
import L from 'leaflet';

export default class OnlineUserMarker extends TrackerReact(Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        users: Meteor.subscribe("onlineUsers")
      }
    }
  }

/*
  componentWillUnmount(){
    this.state.subscription.users.stop();
  }
*/

  allUsers(){
    return Meteor.users.find();
  }

  updateUserLocation(user, lat, lng){
      console.log(`Lat: ${lat} Lng: ${lng}`);
      Meteor.call('updateUser', user, lat, lng);
  }

  distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p))/2;
    //console.log('Distance Between: ', 12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    return 12742 * Math.asin(Math.sqrt(a))
  }

  checker(rutas, usuario){
    var cantidadDeRutas = rutas.length
    const distance = this.distance()
    let distanceInKm;
    var self = this;
    for(i = 0; i < cantidadDeRutas; i++) {
      let distance = self.distance(rutas[i].latitud, rutas[i].longitud, usuario.latitude, usuario.longitude)
      distanceInKm = distance * 2
      console.log('Distance in Kilometers: ', `${distanceInKm} km from ${rutas[i].text} y ${usuario.emails[0].address}`);
      if(distanceInKm <= 0.5) { console.log(`${usuario.emails[0].address} llego a ${rutas[i].text}`);}
    }
  }


  render(){
    const userPosition = Geolocation.latLng();
    var busMarker = L.icon({
      iconUrl: 'http://www.clker.com/cliparts/c/R/Y/9/m/P/blue-bus-190-hi.png',
      iconSize: [80, 55],
      popupAnchor: [0, -10],
    });

    var self = this;
    return(
      <div>
        {this.allUsers().map((user)=>{
          this.updateUserLocation(user, userPosition.lat, userPosition.lng);
          const lat = parseFloat(user.latitude);
          const lon = parseFloat(user.longitude);
          const distance = this.distance()
          {this.checker(this.props.rutas, user)}
          return (
            <div>
              <Marker key={user._id} icon={busMarker} position={[lat, lon]}>
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
