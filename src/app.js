import m from 'mithril'
import 'styles/app.scss'
import User from 'models/user'

// ============================================================================
// Views
// ============================================================================

import Layout from 'components/layout'

import Home from 'views/home'
import AboutRegistration from 'views/registration/about'
import GeneralInformation from 'views/registration/general_information'
import NotFound from 'views/errors/not_found'

// =============================================================================
// State
// =============================================================================
const initState = {
  User
}

console.log(User)
// =============================================================================
// Router
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  m.route(document.body, '/', {
    '/': {
      render: _vnode => m(Layout, m(Home))
    },
    '/register': {
      render: _vnode => m(Layout, m(AboutRegistration, initState))
    },
    '/register/step-1': {
      render: _vnode => m(Layout, m(GeneralInformation, initState))
    },
    '/:any...': {
      render: _vnode => m(Layout, m(NotFound))
    }
  })
})
