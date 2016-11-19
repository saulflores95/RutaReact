import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactDOM from 'react-dom';
import { Geolocation } from 'meteor/mdg:geolocation';

export default class RutaSingleMap extends TrackerReact(Component) {

  render() {
    const position = [this.props.ruta.latitud, this.props.ruta.longitud];
    const zoom = 17;
    var userPosition = Geolocation.latLng();

    return (
      <Map center={position} zoom={zoom}>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
         <Marker position={position}>
          <Popup>
            <span>Ubicacion: <br/>{this.props.ruta.text}</span>
          </Popup>
        </Marker>
        <Marker position={userPosition}>
         <Popup>
           <span>User</span>
         </Popup>
       </Marker>
      </Map>
    );
  }
}
