import * as types from '../mutation-types'

const state = {
  skills: []
}

const getters = {
  skills: state => state.skills,
}

const mutations = {
  [types.READ_SKILLS] (state) {
    state.skills = require('../../assets/skills.json')
  }
}

const actions = {
  readSkills ({commit}) {
    commit(types.READ_SKILLS);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
