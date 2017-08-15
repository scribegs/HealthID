import m from 'mithril'
import { map } from 'lodash'

// ============================================================================
// Views
// ============================================================================

const view =
  vnode => {
    return m('div#app', [
      map(vnode.children, child => {
        child.attrs = vnode.attrs
        return child
      })
    ])
  }

// ============================================================================
// Exports
// ============================================================================

export default {
  view
}