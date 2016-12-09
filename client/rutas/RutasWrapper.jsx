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
      leafletContainer: {
        width: '100%',
        height: '1000',
      },
      rutasContainer:{
        overflow:'scroll',
      }
    }
    return (
      <div>
        <Row>
            <Col xs={6} sm={4} md={2} lg={2}>
              {this.rutas().map((ruta)=>{
                return <RutaSingle key={ruta._id} ruta={ruta} />
              })}
            </Col>
            <Col xs={6} sm={8} md={8} lg={8}>
              <div style={styles.leafletContainer}>
                <RutaMap />
              </div>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <RutasForm />
              <OnlineUserList />
            </Col>
        </Row>
      </div>

    )
  }
}
