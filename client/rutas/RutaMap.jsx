import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';
import OnlineUserMarker from '../users/OnlineUserMarker.jsx';


export default class RutaMap extends Component {

  constructor() {
    super();
    this.state = {
      lat: 32.53259,
      lng: -116.96877,
      zoom: 13,
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
      iconUrl: 'http://icon-rainbow.com/i/icon_05907/icon_059070_256.png',
      iconSize: [120, 80],
      iconAnchor: [38, 38],
      popupAnchor: [20, -30],
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
