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

  check(){
    if(Meteor.userId()){
      return (
        <RutasForm />
      )
    }else{
      return (
        <div>
          <span>login</span>
        </div>
      )
    }
  }

  render(){
    var styles = {
      rutasWrapper:{
        paddingTop: 64,
        height: '100%'
      },
      leafletContainer: {
        width: '100%',
        height: '89vh'
      },
      rutasContainer:{
        overflow:'scroll',
        height: '89vh'
      }
    }
    return (
      <div style={styles.rutasWrapper}>
        <Row>
          <Hidden xs sm>
            <Col xs={6} sm={4} md={4} lg={4}>
              <div style={styles.rutasContainer}>
                {this.rutas().map((ruta) => {
                  return <RutaSingle key={ruta._id} ruta={ruta} />
                })}
              </div>
            </Col>
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

//  <Col xs={12} sm={12} md={12} lg={12}>
//  {this.check()}
//  </Col>
