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
        <div className="col s12 m7">
          <h2 className="header">{this.props.ruta.text}</h2>
          <div className="card horizontal">
            <div className="card-image"><img src={this.props.ruta.url} /></div>
            <div className="card-stacked">
              <div className="card-content">

              </div>
              <div className="card-action">
                <a href={`/rutas/${this.props.ruta._id}`}>mas info</a>
              </div>
            </div>
            <button className="btn-floating btn-large waves-effect waves-light red"
              onClick={this.deleteResolution.bind(this)}>
              &times;
            </button>
          </div>
        </div>
      </div>
    )
  }
}
