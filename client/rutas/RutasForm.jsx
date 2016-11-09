import React, {Component} from 'react';

export default class RutasForm extends Component {

  addRuta(event){
    event.preventDefault();
    var text = this.refs.rutaTitle.value.trim();
    // var longitud = this.refs.rutaLongitud.value;
    //console.log(longitud);
    console.log(text);
    if(text){
      Meteor.call('addRuta', text, (error, data)=>{
        if(error){
          Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-right' );
        }else{
        this.refs.rutaTitle.value = "";
      }
    });

  }
}

  render(){
    return (
      <form className="new-ruta" onSubmit={this.addRuta.bind(this)}>
        <input
          type="text"
          ref="rutaTitle"
          placeholder="Agrega una ruta" />
          <input
            type="text"
            ref="rutaLongitud"
            placeholder="Agrega una ruta" />
      </form>
    )
  }

}
