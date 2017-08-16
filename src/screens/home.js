import m from 'mithril'
import content from 'content/welcome.md'

// ============================================================================
// Views
// ============================================================================

const view =
  vnode => {
    return m('div', m.trust(content))
  }

// ============================================================================
// Export
// ============================================================================

export default {
  view
}
