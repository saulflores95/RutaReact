import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Meteor } from 'meteor/meteor';
import { Geolocation } from 'meteor/mdg:geolocation';

export default class OnlineUserList extends TrackerReact(Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        users: Meteor.subscribe("onlineUsers")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.users.stop();
  }

  allUsers(){
    return Meteor.users.find();
  }

  updateUserLocation(){
    Meteor.call('updateUser', user, latitude, longitude);
  }


  render(){
    const userPosition = Geolocation.latLng();
    return(
      <div>
        {this.allUsers().map((user)=>{
          this.updateUserLocation.bind(user, userPosition.lat, userPosition.lng)
          return <Marker position={userPosition}>
                    <Popup>
                      <h5>Hello: {user._id},
                        Latitud: {user.latitude},
                        Longitud: {userPosition.lng}</h5>
                    </Popup>
                  </Marker>
        })}
      </div>
    )
  }
}
