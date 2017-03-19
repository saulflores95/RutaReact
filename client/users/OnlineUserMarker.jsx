import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Meteor } from 'meteor/meteor';
import { Geolocation } from 'meteor/mdg:geolocation';

export default class OnlineUserMarker extends TrackerReact(Component){
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

  updateUserLocation(user, lat, lng){
      Meteor.call('updateUser', user, lat, lng);
  }

  render(){
    const userPosition = Geolocation.latLng();
    var busMarker = L.icon({
      iconUrl: 'http://www.clker.com/cliparts/c/R/Y/9/m/P/blue-bus-190-hi.png',
      iconSize: [80, 55],
      popupAnchor: [0, -10],
    });
    return(
      <div>
        {this.allUsers().map((user)=>{
          {this.updateUserLocation(user, userPosition.lat, userPosition.lng);}
          return <Marker key={user._id} icon={busMarker} position={[user.latitude, user.longitude]}>
                    <Popup>
                      <h5>{user.emails[0].address}</h5>
                    </Popup>
                  </Marker>
        })}
      </div>
    )
  }
}
