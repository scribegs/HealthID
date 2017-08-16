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
          m('li', m('a', {href: '#!/register'}, navigation.register)),
          m('li', m('a', {href: '#!/view_profile'}, navigation.view_profile))
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
