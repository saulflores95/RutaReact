import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import RutasForm from './RutasForm.jsx';
import RutaSingle from './RutaSingle.jsx';

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
    return (
      <ReactCSSTransitionGroup
      component="div"
      transitionName="route"
      transitionEnterTimeout={600}
      transitionAppearTimeout={600}
      transitionLeaveTimeout={400}
      transitionAppear={true}    >
        <h1>Rutas y Tiempos</h1>
        <RutasForm />
        <ReactCSSTransitionGroup
        className="rutas"
        component='ul'
        transitionName='resolutionLoad'
        transitionEnterTimeout={600}
        transitionLeaveTimeout={400}>

          {this.rutas().map((ruta)=>{
            return <RutaSingle key={ruta._id} ruta={ruta}/>
          })}
          </ReactCSSTransitionGroup>
          </ReactCSSTransitionGroup>
    )
  }
}
