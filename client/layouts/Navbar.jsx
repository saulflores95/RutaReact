import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AccountsUI from '../AccountsUI.jsx';

injectTapEventPlugin();

const styles = {
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
    width: '100%'
  }
};

export default class Navbar extends Component{

  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {open: false};
  }

handleToggle() {
    this.setState({open: !this.state.open});
}

handleClose() {
    this.setState({open: false});
}

  render(){
    return(
      <div>

        <MuiThemeProvider>
          <AppBar
            title="Rutatj.io"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
            style={styles.appBar}>
          </AppBar>
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div>
            <Drawer
              open={this.state.open}
              width={300}
              onRequestChange={(open) => this.setState({open})}>
              <MenuItem onTouchTap={this.handleClose} href="/">Home</MenuItem>
              <MenuItem onTouchTap={this.handleClose} href="/about">About us</MenuItem>
              <MenuItem>{<AccountsUI />}</MenuItem>
            </Drawer>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
