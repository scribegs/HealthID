import m from 'mithril'
import { map } from 'lodash'

// ============================================================================
// Helper functions
// ============================================================================

const validateInput =
  (target, value) => {
    value.isValid()
      ? target.classList.remove('error')
      : target.classList.add('error')
  }

const baseInputView =
  {
    view: vnode => {
      let {label, value} = vnode.attrs
      let {children} = vnode
      let errors = value.error()

      return m('label', [
        label,
        errors && m('span.errors', {title: errors}, '?'),
        children
      ])
    }
  }

// ============================================================================
// Input fields
// ============================================================================

export const textField =
  {
    view: vnode => {
      let { cols, value, label } = vnode.attrs
      let columns = cols || 1

      return m('div', {class: 'col-' + columns}, [
        m(baseInputView, {label, value},
          m('input.u-full-width', {
            type: 'text',
            value: value(),
            onkeyup: m.withAttr('value', value)
          })
        )
      ])
    }
  }

export const selectField =
  {
    view: vnode => {
      let { cols, value, label, placeholder, options } = vnode.attrs
      let columns = cols || 1

      return m('div', {class: 'col-' + columns}, [
        m(baseInputView, {label, value},
          m('select.u-full-width', {
            placeholder: placeholder,
            onchange: m.withAttr('value', value),
            value: value()
          }, map(options, option => m('option', option)))
        )
      ])
    }
  }

export const passwordField =
  opts => {
    return baseInputView(opts,
      m('input.u-full-width', {
        type: 'password',
        onkeyup: m.withAttr('value', opts.value),
        onblur: e => validateInput(e.target, opts.value)
      })
    )
  }
