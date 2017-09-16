import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Container, Row, Col } from 'react-grid-system'
import RegistrationMap from '../map/RegistrationMap'
export default class RutasForm extends Component {
  constructor () {
    super()
    this.state = {
      toogleState: false,
      value: 'Podologist',
      count: 0,
      position: [32, 100],
      url: 'https://s3-us-west-1.amazonaws.com/healthcarebaja/9.png',
      facebook: ''
    }
  }

  addRuta (event) {
    event.preventDefault()
    var text = this.refs.rutaTitle.getValue()
    var latitud = this.state.position.lat
    var longitud = this.state.position.lng
    var url = this.refs.rutaImgUrl.getValue()
    console.log(latitud)
    console.log(longitud)
    if (text) {
      Meteor.call('addRuta', text, longitud, latitud, url, (error, data) => {
        if (error) {
          Bert.alert('Ingresa a tu cuenta o registrate!', 'danger', 'growl-top-right')
        } else {
          this.refs.rutaTitle.setState({ value: '' })
          this.refs.rutaImgUrl.setState({ value: '' })
        }
      })
    }
  }

  mapClick (event) {
    console.log('user right-clicked on map coordinates: ' + event.latlng.toString())
    this.setState({
      position: event.latlng
    })
    console.log('State Current position: ', this.state.position)

    // L.marker(event.latlng)
  }
  render () {
    var { Map, Marker, Popup, TileLayer } = require('react-leaflet')
    const styles = {
      leafletContainer: {
        width: '100%',
        height: '250px'
      }
    }
    return (
      <div>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
          </Col>
        </Row>
        <MuiThemeProvider>
          <form className='new-ruta' onSubmit={this.addRuta.bind(this)}>
            <TextField
              hintText='Agrega una ruta'
              ref='rutaTitle'
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
      </div>

    )
  }
}
