import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import RutasForm from './RutasForm.jsx';
import RutaSingle from './RutaSingle.jsx';
import RutaMap from './RutaMap.jsx';


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

      }
    }
    return (
      <div>
        <div className="row">
          <div className="col l2">
            {this.rutas().map((ruta)=>{
              return <RutaSingle key={ruta._id} ruta={ruta} />
            })}
          </div>
          <div className="col l8">
            <div style={styles.leafletContainer}>
              <RutaMap />
            </div>
          </div>
          <div className="col l2">
            <RutasForm />
          </div>
        </div>
      </div>

    )
  }
}
