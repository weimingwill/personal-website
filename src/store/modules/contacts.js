import * as types from '../mutation-types'

const state = {
  contacts: []
}

const getters = {
  contacts: state => state.contacts,
}

const mutations = {
  [types.READ_CONTACTS] (state) {
    let contactMethods = require('../../assets/contact-methods.json')
    state.contacts = contactMethods.methods
  }
}

const actions = {
  readContacts ({commit}) {
    commit(types.READ_CONTACTS);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
