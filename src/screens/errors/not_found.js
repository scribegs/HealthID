import m from 'mithril'
import i18n from 'locale.yaml'

const view =
  vnode => {
    let { errors } = i18n[navigator.language]
    return m('div', errors.page_not_found)
  }

export default {
  view
}
