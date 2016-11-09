import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

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

      return(
        <div>
          <h1>{res.text}</h1>
          <h1>latitud:  {res.latitud}</h1>
          <h1>longitud:  {res.longitud}</h1>

        </div>
      )
  }
}
