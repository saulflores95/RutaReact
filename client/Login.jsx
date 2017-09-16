import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Accounts, STATES } from 'meteor/std:accounts-semantic';
import Tracker from 'tracker-component'

class NewLogin extends Accounts.ui.LoginForm {
  fields() {
    const { formState } = this.state;
    if (formState == STATES.SIGN_UP) {
      return {
        tipo: {
          id: 'tipo',
          hint: 'Teclea el tipo de camion',
          label: 'Tipo de camion',
          onChange: this.handleChange.bind(this, 'tipo')
        },
        img: {
          id: 'img',
          hint: 'Teclea el link de la imagen',
          label: 'Imagen del camion',
          onChange: this.handleChange.bind(this, 'img')
        },
        ...super.fields()
      };
    }
    return super.fields();
  }

  signUp(options = {}) {
    const { tipo = null } = this.state;
    if (tipo !== null && img !== null) {
      console.log("tipo "+tipo);
      options.profile = Object.assign(options.profile || {}, {
        tipo: tipo,
        img: img
      });
    }
    super.signUp(options);
  }
}

Accounts.ui.LoginForm = NewLogin;
Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/login',
  signUpPath: '/signup',
  resetPasswordPath: '/reset-password',
  profilePath: '/profile',
  onSignedInHook: () => FlowRouter.go('/general'),
  onSignedOutHook: () => FlowRouter.go('/login'),
  minimumPasswordLength: 6
});

export default class NewUser extends Component {
  render() {
    return (
      <div style={{marginTop: 50, display: 'block', marginLeft:'auto', marginRight: 'auto', width: 500}} >
        <h2 style={{textAlign: 'center'}}>Register</h2>
        <div>
          <Accounts.ui.LoginForm />
        </div>
      </div>
    );
  }
}
