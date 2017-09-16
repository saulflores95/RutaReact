import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system'
import DriverStop from './DriverStop'

export default class DriverProfile extends TrackerReact(Component) {
  constructor () {
    super()
    this.state = {
      subscription: {
        users: Meteor.subscribe('drivers'),
        rutas: Meteor.subscribe('allRutas')
      }
    }
  }

  componentWillUnmount () {
    this.state.subscription.rutas.stop()
  }

  rutas () {
    return Rutas.find().fetch()
  }

  render () {
    console.log(user)
    const styles = {
      container: {
        'marginTop': '75px',
        'width': '100%'
      }
    }
    return (
      <div style={styles.container}>
        <Container>
          <Row>
            <Col md={8}>
              <div>
                <img width='300px' height='300px' src='https://lh6.ggpht.com/_tF3hZio_Czw/S3H4vV_jBtI/AAAAAAAAAjI/3OhWm--pRm8/Titulo_thumb%5B5%5D.jpg?imgmax=800' />
              </div>
            </Col>
            <Col md={4}>
              <h1>Juan Ramon Vertigol</h1>
              <h3>Llego a: Prueba 1</h3>
            </Col>
          </Row>
          <Row>
            {this.rutas().map((ruta) => {
              return (
                <div key={ruta._id}>
                  <DriverStop ruta={ruta} />
                </div>
              )
            })}
          </Row>
        </Container>
      </div>
    )
  }
}
