import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import About from './About.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import ResolutionDetail from './resolutions/ResolutionDetail.jsx';
import RutasWrapper from './rutas/RutasWrapper.jsx';
import RutaDetail from './rutas/RutaDetail.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout,{
      content: (<RutasWrapper />),
    })
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout,{
      content: (<About />),
    })
  }
});

FlowRouter.route('/rutas', {
  action() {
    mount(MainLayout,{
      content: (<RutasWrapper />),
    })
  }
});

FlowRouter.route('/rutas/:id', {
  action(params) {
    mount(MainLayout,{
      content: (<RutaDetail id={params.id} />),
    })
  }
});
