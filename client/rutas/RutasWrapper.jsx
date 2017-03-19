import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import RutasForm from './RutasForm.jsx';
import RutaSingle from './RutaSingle.jsx';
import RutaMap from './RutaMap.jsx';
import OnlineUserList from '../users/OnlineUserList.jsx';
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system';

Rutas = new Mongo.Collection("rutas");

export default class RutasWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        rutas: Meteor.subscribe("userRutas")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.rutas.stop();
  }

  rutas(){
    return Rutas.find().fetch();
  }

  render(){
    var styles = {
      rutasWrapper:{
        paddingTop: 66,
      },
      leafletContainer: {
        width: '100%',
        height: '100vh',
      },
      rutasContainer:{
        overflow:'scroll',
        height: '100vh',
      },
    }
    return (
      <div style={styles.rutasWrapper}>
        <Row>
          <Hidden xs sm>
            <div style={styles.prueba2}>
              <Col xs={6} sm={4} md={4} lg={4}>
                <div style={styles.rutasContainer}>
                  {this.rutas().map((ruta)=>{
                    return <RutaSingle key={ruta._id} ruta={ruta} />
                  })}
                </div>
              </Col>
            </div>
          </Hidden>
          <Col xs={12} sm={12} md={8} lg={8}>
            <div style={styles.leafletContainer}>
              <RutaMap />
            </div>
          </Col>
        </Row>
      </div>

    )
  }
}
