import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import RutaSingleMap from './RutaSingleMap.jsx';

export default class RutaDetail extends TrackerReact(Component){
  constructor(){
    super();

    this.state = {
      subscription: {
        rutas: Meteor.subscribe("allRutas")
      }
    }
  }

  ruta(){
    return Rutas.findOne(this.props.id);
  }

  render(){
    let res = this.ruta();
    if(!res){
      return(<div>Loading...</div>);
    }

    var styles = {
      leafletContainer: {
        width: '100%',
        height: '1000px',
      }
    }
    return(
      <div>
        <div>
          <div>
            <h3>{res.text}</h3>
          </div>
          <div>
            <div style={styles.leafletContainer}>
              <RutaSingleMap ruta={res} />
            </div>
          </div>
        </div>


      </div>
    )
  }

}
