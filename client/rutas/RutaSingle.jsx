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
    var d = new Date(); // for now
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds(); // => 51
    return(
      <div>
        <ul className="collection">
            <li className="collection-item avatar">
              <div className="row">
                <div className="col l11 m11 s11">
                  <img src={this.props.ruta.url} alt="" className="circle" />
                  <span className="title">{this.props.ruta.text}</span>
                  <p>
                    {`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}
                  </p>
                  <a href={`/rutas/${this.props.ruta._id}`} class="secondary-content"><i class="material-icons">mas info</i></a>
                </div>
                <div className="col l1 m1">
                  <button className="btn-floating btn-large waves-effect waves-light red"
                    onClick={this.deleteResolution.bind(this)}>
                    &times;
                  </button>
                </div>
              </div>
            </li>
        </ul>
      </div>

    )
  }
}
