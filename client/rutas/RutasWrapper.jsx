import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import RutasForm from './RutasForm.jsx';
import RutaSingle from './RutaSingle.jsx';
import RutaMap from './RutaMap.jsx';
import OnlineUserList from '../users/OnlineUserList.jsx';
import {Responsive, WidthProvider} from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);


Rutas = new Mongo.Collection("rutas");

export default class RutasWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        rutas: Meteor.subscribe("userRutas")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.rutas.stop();
  }

  rutas(){
    return Rutas.find().fetch();
  }

  render(){
    var styles = {
      leafletContainer: {
        width: '100%',
        height: '1000',
      },
      rutasContainer:{
        overflow:'scroll',
      }
    }
    return (
      <div>
        <ResponsiveReactGridLayout
          className="layout"
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 11, sm: 10, xs: 7, xxs: 2}}
          margin={[number, number] = [15, 15]}>
          <div key="a" style={styles.rutasContainer} data-grid={{x: 0, y: 0, w: 2, h: 6, static: true}}>
            {this.rutas().map((ruta)=>{
              return <RutaSingle key={ruta._id} ruta={ruta} />
            })}
          </div>
          <div key="b" data-grid={{x: 2, y: 0, w: 8, h: 6, static: true}}>
            <div style={styles.leafletContainer}>
              <RutaMap />
            </div>
          </div>
          <div key="c" data-grid={{x: 10, y: 0, w: 2, h: 6, static: true}}>
          <RutasForm />
          <OnlineUserList />
          </div>
        </ResponsiveReactGridLayout>
      </div>

    )
  }
}
