import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';
import OnlineUserList from '../users/OnlineUserList.jsx';


export default class RutaMap extends Component {

  constructor() {
    super();
    this.state = {
      lat: 32.53259,
      lng: -116.96877,
      zoom: 10,
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
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.rutas().map((ruta)=>{
          return <Marker position={[ruta.latitud, ruta.longitud]}>
            <Popup>
              <span>Location. <br/>{ruta.text}</span>
            </Popup>
          </Marker>
        })}
        <OnlineUserList />
      </Map>
    );
  }
}
