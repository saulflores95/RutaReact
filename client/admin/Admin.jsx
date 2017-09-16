import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import LoadingComponent from '../layouts/LoadingComponent.jsx'
import {Container, Row, Col, Visible, Hidden } from 'react-grid-system'

export default class Admin extends TrackerReact(Component) {
  constructor () {
    super()

    this.state = {
      subscription: {
        users: Meteor.subscribe('onlineUsers')
      }
    }
  }

  allUsers () {
    return Meteor.users.find()
  }

  render () {
    const backgroundImg = 'https://sintesistv.com.mx/wp-content/uploads/2017/03/sitt-tijuana-ruta-troncal-camiones-rutas-transporte-4.jpg'
    let style = {
      card: {
        'backgroundColor': 'gray',
        'height': '400px',
        'width': '100%',
        'boxShadow': '4px 4px 5px #888888'
      },
      info: {
        'marginRight': '20px',
        'marginLeft': '20px',
        'paddingTop': '50px'
      },
      img: {
        'width': '100%',
        'height': '60%',
        'backgroundImage': `url(${backgroundImg})`,
        'backgroundSize': '100% 100%'
      },
      marker: {
        'height': '50px',
        'width': '50px',
        'backgroundColor': 'red',
        'float': 'right',
        'borderRadius': '50%'
      }
    }
    return (
      <div>
        <h1>Fuck</h1>
        <Container>
          <Row>
            {this.allUsers().map(user => {
              return (
                <Col key={user._id} sm={12} md={6} lg={4}>
                  <a href={`/driver/${user._id}}`}>
                    <div style={style.card} href={`/driver/${user._id}}`}>
                      <div style={style.img} />
                      <div style={style.info}>
                        <Row>
                          <Col md={6} lg={6}>
                            <h2>{user.emails[0].address}</h2>
                            <h4>{user.currentStop}</h4>
                          </Col>
                          <Col md={6} lg={6}>
                            <div style={style.marker} />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </a>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    )
  }
}
