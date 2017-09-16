import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system'

export default class DriverStop extends TrackerReact(Component) {
  constructor () {
    super()
    this.state = {
      subscription: {}
    }
  }

  render () {
    let styles = {
      card: {
        'height': '500px',
        'width': '100%',
        'marginTop': '50px',
        'marginBottom': '60px',
        'backgroundColor': 'gray'
      }
    }

    return (
      <Col sm={4} md={4} lg={4}>
        <div style={styles.card} />
      </Col>
    )
  }
}
