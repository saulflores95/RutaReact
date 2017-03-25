import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AccountsUI from '../AccountsUI.jsx';

injectTapEventPlugin();

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
    const styles = {
      appBar: {
        flexWrap: 'wrap',
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        zIndex: '999'
      },
      tabs: {
        width: '100%'
      },
      sideNav: {
        zIndex: '9999'
      },
      title: {
        textDecoration: 'none !important',
        color: 'white !important'
      }
    };

    return(
      <div>
        <MuiThemeProvider>
          <AppBar
            title={<span>Rutatj.io</span>}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={(event) => {this.handleToggle(); event.preventDefault();}}
            style={styles.appBar}
            >
          </AppBar>
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div style={styles.sideNav}>
            <Drawer
              open={this.state.open}
              width={300}
              docked={false}
              onRequestChange={(open) => this.setState({open})}>
              <MenuItem onClick={this.handleClose} href="/rutas">Home</MenuItem>
              <MenuItem onClick={this.handleClose} href="/about">About us</MenuItem>
              <MenuItem>{<AccountsUI />}</MenuItem>
            </Drawer>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
