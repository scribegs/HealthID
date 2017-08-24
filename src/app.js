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
import VerifyAndSubmit from 'views/registration/verify_and_submit'
import NotFound from 'views/errors/not_found'

// =============================================================================
// State
// =============================================================================
const initState = {
  User
}

// =============================================================================
// Router
// =============================================================================

m.route(document.body, '/', {
  '/': {
    render: _vnode => m(Layout, m(Home))
  },
  '/registration': {
    render: _vnode => m(Layout, m(AboutRegistration, initState))
  },
  '/registration/step-1': {
    render: _vnode => m(Layout, m(GeneralInformation, initState))
  },
  '/registration/verify': {
    render: _vnode => m(Layout, m(VerifyAndSubmit, initState))
  },
  '/:any...': {
    render: _vnode => m(Layout, m(NotFound))
  }
})
