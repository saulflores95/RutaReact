import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';
import OnlineUserMarker from '../users/OnlineUserMarker.jsx';
import Control from 'react-leaflet-control';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Hidden } from 'react-grid-system';
import L from 'leaflet';
import RutaSingle from './RutaSingle.jsx';

export default class RutaMap extends Component {

  constructor() {
    super();
    this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15,
      open: false,
      subscription: {
        rutas: Meteor.subscribe("allRutas")
      }
    };
  }

  handleToggle () {
    this.setState({open: !this.state.open});
  }

  handleClose () {
    this.setState({open: false});
  }


  componentWillUnmount(){
    this.state.subscription.rutas.stop();
  }

  rutas(){
    return Rutas.find().fetch();
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    var styles = {
      'rutasWrapper':{
        'zIndex':'9999'
      }
    }
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
      <Map style={styles.map} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Hidden xl lg md>
          <Control position='topleft'>
            <MuiThemeProvider>
              <div onClick={this.handleToggle.bind(this)}>
                <FloatingActionButton mini >
                  <ContentAdd/>
                </FloatingActionButton>
              </div>
            </MuiThemeProvider>
          </Control>
        </Hidden>
        <div>
        {this.rutas().map((ruta)=>{
          return (
            <Marker icon={stationMarker} position={[ruta.latitud, ruta.longitud]}>
              <Popup>
                <span>{ruta.text}</span>
              </Popup>
            </Marker>
          );
        })}
        </div>
        <OnlineUserMarker />
        <MuiThemeProvider>
          <div>
            <Drawer
              open={this.state.open}
              docked={false}
              className='sidenav'
              onRequestChange={(open) => this.setState({open})}>
              <div className={styles.rutasWrapper}>
                {this.rutas().map((ruta) => {
                  return <RutaSingle key={ruta._id} ruta={ruta} />
                })}
              </div>
            </Drawer>
          </div>
        </MuiThemeProvider>
      </Map>
    );
  }

}
