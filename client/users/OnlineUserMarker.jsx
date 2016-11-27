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


  render(){

    const userPosition = Geolocation.latLng();
    var busMarker = L.icon({
      iconUrl: 'http://www.clker.com/cliparts/c/R/Y/9/m/P/blue-bus-190-hi.png',
      iconSize: [80, 55],
      popupAnchor: [0, -10],
    //  popupAnchor: [-3, -76],
    //  shadowUrl: '',
    //  shadowSize: [68, 95],
    //  shadowAnchor: [22, 94]
    });
    return(
      <div>
        {this.allUsers().map((user)=>{
          return <Marker icon={busMarker} position={[user.latitude, user.longitude]}>
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
