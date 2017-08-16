import m from 'mithril'
import 'styles/app.scss'

// ============================================================================
// Screens
// ============================================================================

import Layout from 'components/layout'
import Home from 'screens/home'
import NotFound from 'screens/errors/not_found'

// =============================================================================
// Router
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  const render = view => ({render: () => m(Layout, m(view))})

  m.route(document.body, '/', {
    '/': render(Home),
    '/:any...': render(NotFound)
  })
})
