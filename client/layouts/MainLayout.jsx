import React from 'react';
import ReactDOM from 'react-dom';
import AccountsUI from '../AccountsUI.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export const MainLayout = ({content}) => (
  <div>
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">RutaTj.io</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/rutas">Rutas</a></li>
        <li><a href="/about">Nosotros</a></li>
        <li><div className="divider"></div></li>
        <li><a className="waves-effect" href="#!">Contacto</a></li>
        <AccountsUI />
      </ul>
    </div>
  </nav>

    <main>
      <MuiThemeProvider>
        {content}
      </MuiThemeProvider>
    </main>
  </div>
)
