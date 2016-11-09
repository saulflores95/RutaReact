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
      <li className={rutaClass}>
        <input type="checkbox"
          readOnly={true}
          checked={this.props.ruta.complete}
          onClick={this.toggleChecked.bind(this)} />

        <a href={`/rutas/${this.props.ruta._id}`}>{this.props.ruta.text}</a>
        {status}
        <button className="btn-cancel"
          onClick={this.deleteResolution.bind(this)}>
          &times;
        </button>
      </li>
    )
  }
}
