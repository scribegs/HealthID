import m from 'mithril'
import content from 'content/about.md'

// =============================================================================
// Views
// =============================================================================

const view =
  vnode => {
    return m('div#about', [
      m.trust(content),

      m('a.button', {
        href: '/registration/step-1',
        oncreate: m.route.link
      }, 'Get Started')
    ])
  }

// =============================================================================
// Export
// =============================================================================

export default {
  view
}
