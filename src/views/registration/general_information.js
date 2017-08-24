import m from 'mithril'
import { textField, selectField } from 'components/form_fields'

// =============================================================================
// Views
// =============================================================================

const view =
  vnode => {
    let { User } = vnode.attrs

    return m('div#general-information', [
      m('h1', 'General Information'),
      m('fieldset', [
        m('div.flex', [
          m(textField, {
            label: 'First Name',
            value: User.firstName,
            cols: 3
          }),

          m(textField, {
            label: 'MI',
            value: User.middleInitial,
            cols: 1
          }),

          m(textField, {
            label: 'Last Name',
            value: User.lastName,
            cols: 3
          }),

          m(textField, {
            label: 'Preferred Name',
            value: User.preferredName,
            cols: 3
          })
        ]),

        m('div.flex', [
          m(selectField, {
            label: 'Marital Status',
            value: User.maritalStatus,
            cols: 1,
            options: ['', 'married', 'single', 'widowed', 'other']
          }),

          m(textField, {
            label: 'Date of Birth',
            value: User.dob,
            cols: 1
          }),

          m(selectField, {
            label: 'Gender',
            value: User.gender,
            cols: 1,
            options: ['', 'male', 'female', 'other']
          }),

          m(selectField, {
            label: 'Race',
            value: User.race,
            cols: 1,
            options: ['', 'American indian or Alaskan native', 'asian', 'black',
              'native Hawaiian or other pacific islander', 'white', 'other']
          })
        ])
      ]),
      m('div.actions', [
        m('a.button', {
          href: '/registration/verify',
          oncreate: m.route.link
        }, 'Verify and Submit')
      ])
    ])
  }

// =============================================================================
// Export
// =============================================================================

export default {
  view
}
