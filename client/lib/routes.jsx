import React from 'react'
import {mount} from 'react-mounter'
import {MainLayout} from '../layouts/MainLayout.jsx'
import RutasWrapper from '../rutas/RutasWrapper.jsx'
import RutaDetail from '../rutas/RutaDetail.jsx'
import About from '../About.jsx'
import RutasForm from '../rutas/RutasForm'
import OnlineUserList from '../users/OnlineUserList'
import Admin from '../admin/Admin'
FlowRouter.route('/', {
  action () {
    mount(MainLayout, {
      content: (<RutasWrapper />)
    })
  }
})

FlowRouter.route('/about', {
  action () {
    mount(MainLayout, {
      content: (<About />)
    })
  }
})

FlowRouter.route('/add-ruta', {
  action () {
    mount(MainLayout, {
      content: (
        <div>
          <OnlineUserList />
          <RutasForm />
        </div>
      )
    })
  }
})

FlowRouter.route('/rutas', {
  action () {
    mount(MainLayout, {
      content: (<RutasWrapper />)
    })
  }
})

FlowRouter.route('/rutas/:id', {
  action (params) {
    mount(MainLayout, {
      content: (<RutaDetail id={params.id} />)
    })
  }
})

FlowRouter.route('/admin', {
  action () {
    mount(MainLayout, {
      content: (
        <div>
          <Admin />
        </div>
      )
    })
  }
})
