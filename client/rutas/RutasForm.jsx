import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class RutasForm extends Component {
  addRuta (event) {
    event.preventDefault()
    var text = this.refs.rutaTitle.getValue()
    var longitud = this.refs.rutaLongitud.getValue()
    var latitud = this.refs.rutaLatitud.getValue()
    var url = this.refs.rutaImgUrl.getValue()

    console.log(text)
    console.log(longitud)
    console.log(latitud)
    console.log(url)

    if (text) {
      Meteor.call('addRuta', text, longitud, latitud, url, (error, data) => {
        if (error) {
          Bert.alert('Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-right')
        } else {
          this.refs.rutaTitle.setState({ value: '' })
          this.refs.rutaLongitud.setState({ value: '' })
          this.refs.rutaLatitud.setState({ value: '' })
          this.refs.rutaImgUrl.setState({ value: '' })
        }
      })
    }
  }

  render () {
    return (
      <MuiThemeProvider>
        <form className='new-ruta' onSubmit={this.addRuta.bind(this)}>
          <TextField
            hintText='Agrega una ruta'
            ref='rutaTitle'
            fullWidth
          />
          <TextField
            hintText='Longitud'
            ref='rutaLongitud'
            fullWidth
          />
          <TextField
            hintText='Latitud'
            ref='rutaLatitud'
            fullWidth
          />
          <TextField
            hintText='url de imagen'
            ref='rutaImgUrl'
            fullWidth
          />
          <RaisedButton
            label='Submit query'
            type='submit'
            className='button-submit'
            primary
          />
        </form>
      </MuiThemeProvider>

    )
  }
}
