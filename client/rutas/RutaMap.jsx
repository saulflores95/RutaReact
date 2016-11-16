import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';

export default class RutaMap extends Component {

  constructor() {
    super();
    this.state = {
      lat: 32.53259,
      lng: -116.96877,
      zoom: 10,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>Location. <br/>Bitch</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}
