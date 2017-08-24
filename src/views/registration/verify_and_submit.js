import m from 'mithril'
import content from 'content/notary_verify_and_submit.md'
import notaryInformation from './components/notary_information'

//
// Actions
//

const signAndSubmit =
  vnode => _ => {
    let { User } = vnode.attrs
    global.Notary.signPayload(User.data())
  }

const signatureHandler =
  vnode => msg => {
    if (msg.data.type === 'signed_data') {
      vnode.state.signature = msg.data.signature
      m.redraw()
    }
  }

//
// View
//

const view =
  vnode => {
    let { signature } = vnode.state || {}
    console.log(vnode.state)

    return m('div',
      global.Notary && m('div.notarized', [
        m.trust(content),
        !signature
          ? m('button.button', {
            onclick: signAndSubmit(vnode)
          }, 'Sign')
          : m(notaryInformation, {notary: signature.notary})
      ])
    )
  }

export default {
  view,
  oninit: vnode => {
    vnode.state.signatureHandler = signatureHandler(vnode)
    window.addEventListener('message', vnode.state.signatureHandler)
  },
  onremove: vnode => {
    window.removeEventListener('message', vnode.state.signatureHandler)
  }
}
