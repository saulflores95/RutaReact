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

export default class NewUser extends Component {
  render() {
    return (
        <h2 style={{textAlign: 'center'}}>Register</h2>
        <div>
          <Accounts.ui.LoginForm formState={ STATES.SIGN_UP }/>
        </div>
      </div>
    );
  }
}
