import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';
import OnlineUserMarker from '../users/OnlineUserMarker.jsx';


export default class RutaMap extends Component {

  constructor() {
    super();
    this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15,
      subscription: {
        rutas: Meteor.subscribe("allRutas")
      }
    };
  }

  componentWillUnmount(){
    this.state.subscription.rutas.stop();
  }

  rutas(){
    return Rutas.find().fetch();
  }

  render() {
    const position = [this.state.lat, this.state.lng];

    var stationMarker = L.icon({
      iconUrl: 'https://s15.postimg.org/x8j35nsqz/Icon.png',
      iconSize: [80, 80],
      iconAnchor: [38, 38],
      popupAnchor: [0, -30],
    //  shadowUrl: '',
    //  shadowSize: [68, 95],
    //  shadowAnchor: [22, 94]
    });

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.rutas().map((ruta)=>{
          return <Marker icon={stationMarker} position={[ruta.latitud, ruta.longitud]}>
            <Popup>
              <span>Location. <br/>{ruta.text}</span>
            </Popup>
          </Marker>
        })}
        <OnlineUserMarker />
      </Map>
    );
  }

}
