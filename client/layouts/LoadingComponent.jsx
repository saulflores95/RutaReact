import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

export default class ButtomNavigation extends Component{
  constructor(){
    super();

    this.state = {}
  }

  render() {
    const styles = {
      centered: {
        position: 'fixed', /* or absolute */
        top: '50%',
        left: '50%',
      }
    }
    return (
      <div style={styles.centered}>
        <MuiThemeProvider>
          <CircularProgress size={80} thickness={7}/>
        </MuiThemeProvider>
      </div>
    );
  }
}
