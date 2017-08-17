import m from 'mithril'
import locale from 'locale.yaml'

// ============================================================================
// Views
// ============================================================================

const view =
  vnode => {
    let { navigation } = locale[navigator.language]

    return m('div#navbar.flex', [
      m('a#brand', {href: '#!/'}, 'Scribe'),
      m('nav',
        m('ul', [
          m('li', m('a', {
            href: '/register',
            oncreate: m.route.link
          }, navigation.register)),

          m('li', m('a', {
            href: '/view_profile',
            oncreate: m.route.link
          }, navigation.view_profile))
        ])
      )
    ])
  }

// ============================================================================
// Export
// ============================================================================

export default {
  view
}
