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

  updateUserLocation(user, lat, lng){
      Meteor.call('updateUser', user, lat, lng);
  }



  render(){
    const userPosition = Geolocation.latLng();
    return(
      <div id="userListComponent">
        <h3>Online User List</h3>
        {this.allUsers().map((user)=>{
          return(
            <div>
              <h4>{user._id} </h4>
              <h5>{user.latitude}</h5>
              <h5>{user.longitude}</h5>
              <button onClick={this.updateUserLocation.bind(this, user, userPosition.lat, userPosition.lng)}>
                Update Settings
              </button>
            </div>
          )
        })}
      </div>
    )
  }
}
