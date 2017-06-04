import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'
import menu from './modules/menu'
import project from './modules/projects'
import skills from './modules/skills'
import contacts from './modules/contacts'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    app,
    menu,
    project,
    skills,
    contacts
  },
  // strict: debug
});

export default store
