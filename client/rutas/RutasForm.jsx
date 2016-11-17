import React, {Component} from 'react';

export default class RutasForm extends Component {

  addRuta(event){
    event.preventDefault();
    var text = this.refs.rutaTitle.value.trim();
    var longitud = this.refs.rutaLongitud.value;
    var latitud = this.refs.rutaLatitud.value;
    var url = this.refs.rutaImgUrl.value;

    console.log(text);
    console.log(longitud);
    console.log(latitud);
    console.log(url);

    if(text){
      Meteor.call('addRuta', text, longitud, latitud, url, (error, data)=>{
        if(error){
          Bert.alert( 'Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-right' );
        }else{
        this.refs.rutaTitle.value = "";
        this.refs.rutaLongitud.value = "";
        this.refs.rutaLatitud.value = "";
        this.refs.rutaImgUrl.value = "";
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
          type="number"
          ref="rutaLongitud"
          placeholder="Longitud"
          step="any" />
        <input
          type="number"
          ref="rutaLatitud"
          placeholder="Latitud"
          step="any"/>
        <input
          type="text"
          ref="rutaImgUrl"
          placeholder="url de imagen" />
        <input className="btn btn-large"
          type="submit" />
      </form>
    )
  }

}
