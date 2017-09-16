import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Meteor } from 'meteor/meteor'
import { Geolocation } from 'meteor/mdg:geolocation'

export default class OnlineUserList extends TrackerReact(Component) {
  constructor () {
    super()

    this.state = {
      subscription: {
        users: Meteor.subscribe('onlineUsers')
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.users.stop();
  }

  allUsers () {
    return Meteor.users.find()
  }

  updateUserLocation (user, lat, lng) {
    Meteor.call('updateUser', user, lat, lng)
    console.log('UserId: ' + user._id)
    console.log('New Latitude: ' + lat)
    console.log('New Longitude: ' + lng)
  }

  render () {
    const userPosition = Geolocation.latLng()
    return (
      <div id='userListComponent'>
        <h3>Online User List</h3>
        {this.allUsers().map((user) => {
          this.updateUserLocation(user, userPosition.lat, userPosition.lng)
          return (
            <div>
              <h5>{user._id}</h5>
              <h5>{user.latitude}</h5>
              <h5>{user.longitude}</h5>
            </div>
          )
        })}
      </div>
    )
  }
}
