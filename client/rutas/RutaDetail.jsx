import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import RutaMap from './RutaMap.jsx';
export default class RutaDetail extends Component{
  constructor(){
    super();

    this.state = {
      subscription: {
        rutas: Meteor.subscribe("userRutas")
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
        <div className="row">
          <div className="col l3 m3 s6">
            <h1>{res.text}</h1>
            <h1>Latitud:  {res.latitud}</h1>
            <h1>longitud:  {res.longitud}</h1>
          </div>
          <div className="col l9 m9 s6">
            <div style={styles.leafletContainer}>
              <RutaMap />
            </div>
          </div>
        </div>


      </div>
    )
  }
}
