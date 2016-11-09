import React, {Component} from 'react';

export default class RutaSingle extends Component {

toggleChecked(){
  Meteor.call('toggleRuta', this.props.ruta);
}

deleteResolution(){
  Meteor.call('deleteRuta', this.props.ruta);
}

  render(){

    const rutaClass = this.props.ruta.complete ? "checked" : "";
    const status = this.props.ruta.complete ? <span className="completed">completed</span> : '';

    return(
      <div>
        <img src={this.props.ruta.url} />
        <h4><a href={`/rutas/${this.props.ruta._id}`}>{this.props.ruta.text}</a></h4>
        <h5></h5>
        <button className="btn-cancel"
          onClick={this.deleteResolution.bind(this)}>
          &times;
        </button>
      </div>
    )
  }
}
