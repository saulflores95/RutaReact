import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';
import OnlineUserMarker from '../users/OnlineUserMarker.jsx';
import Control from 'react-leaflet-control';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Drawer from 'material-ui/Drawer';
import { Hidden, Row, Col, Visible } from 'react-grid-system';
import RutaSingle from './RutaSingle.jsx';
import MenuItem from 'material-ui/MenuItem';

export default class RutaMap extends Component {

  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  componentWillUnmount(){
    this.state.subscription.rutas.stop();
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }


  rutas(){
    return Rutas.find().fetch();
  }

  render() {

    var styles = {
      rutasContainer:{
        overflow:'scroll',
      }
    };
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
        <Row>
          <Col>
            <Hidden md lg xl>
              <Control position='topleft'>
                <MuiThemeProvider>
                  <FloatingActionButton mini onClick={this.handleToggle}>
                    <ContentAdd />
                  </FloatingActionButton>
                </MuiThemeProvider>
              </Control>
            </Hidden>
          </Col>
        </Row>
        {this.rutas().map((ruta)=>{
          return
          <Marker icon={stationMarker} position={[ruta.latitud, ruta.longitud]}>
            <Popup>
              <span>Location. <br/>{ruta.text}</span>
            </Popup>
          </Marker>
        })}
        <OnlineUserMarker />
        <MuiThemeProvider>
          <div>
            <Drawer
              open={this.state.open}
              docked={false}
              className='sidenav'
              onRequestChange={(open) => this.setState({open})}>
              <div style={styles.rutasContainer}>
                <MenuItem>
                  {this.rutas().map((ruta)=>{
                    return <RutaSingle key={ruta._id} ruta={ruta} />
                  })}
                </MenuItem>
              </div>
            </Drawer>
          </div>
        </MuiThemeProvider>
      </Map>
    );
  }

}
