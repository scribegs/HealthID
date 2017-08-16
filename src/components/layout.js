import m from 'mithril'
import navbar from 'components/navbar'
import { map } from 'lodash'

// ============================================================================
// Views
// ============================================================================

const view =
  vnode => {
    return m('div#app', [
      m(navbar),
      m('main#content', [
        map(vnode.children, child => {
          child.attrs = vnode.attrs
          return child
        })
      ])
    ])
  }

// ============================================================================
// Exports
// ============================================================================

export default {
  view
}
