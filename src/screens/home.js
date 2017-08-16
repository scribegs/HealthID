import m from 'mithril'
import content from 'content/welcome.md'

const view =
  vnode => {
    return m('div', m.trust(content))
  }

export default {
  view
}
