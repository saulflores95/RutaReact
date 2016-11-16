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
      <div>
        <div className="row">
          <div className="col l2">
            <RutasForm />
          </div>
          <div className="col l10">
          {this.rutas().map((ruta)=>{
            return <RutaSingle key={ruta._id} ruta={ruta} />
          })}
          </div>
        </div>
      </div>

    )
  }
}
