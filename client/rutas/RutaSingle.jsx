import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Paper from 'material-ui/Paper';

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
    var container = {
      'width':'100%'
    };
    return(
      <div>
        <MuiThemeProvider>
        <div className={container}>
          <Paper>
            <ul>
              <li>
                <img src={this.props.ruta.url} alt="" />
                <span>{this.props.ruta.text}</span>
                <p>
                  {`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}
                </p>
                <a href={`/rutas/${this.props.ruta._id}`}>mas info</a>
                <div>
                  <MuiThemeProvider>
                    <FloatingActionButton
                      mini={true}
                      secondary={true}
                      onClick={this.deleteResolution.bind(this)}>
                      <NavigationClose />
                    </FloatingActionButton>
                  </MuiThemeProvider>
                </div>
              </li>
            </ul>
          </Paper>
          </div>

        </MuiThemeProvider>
      </div>
    )
  }
}
