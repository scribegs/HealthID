import m from 'mithril'

//
// Views
//

const view =
  vnode => {
    let { notary } = vnode.attrs

    return notary && m('div.row', [
      m('div.twelve.columns', 'Data signed by: ' + notary.email_address)
    ])
  }

//
// Export
//

export default {
  view
}
