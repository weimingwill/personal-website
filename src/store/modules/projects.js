import * as types from '../mutation-types'
import { readTextFile } from '../../helper/index'

const PROJECTS = ['inventory-system', 'nus-bus', 'airline-system', 'programmer-comparison-system']

const state = {
  projects: []
}

const getters = {
  projects: state => state.projects,

  projectRows: state => {
    let projectRows = []
      , i
      , projectRow
      , length = state.projects.length

    for (i = 0; i < length; i++) {
      if ( i % 3 === 0) {
        projectRow = []
      }

      projectRow.push(state.projects[i])

      if (i % 3 === 2 || i === length - 1) {
        projectRows.push(projectRow)
      }
    }
    return projectRows
  }
}

const mutations = {
  [types.READ_PROJECTS] (state, projects) {
    let project
    PROJECTS.forEach(name => {
      project = require('../../assets/projects/'+ name + '.json')
      state.projects.push(project)
    })
  }
}

const actions = {
  readProjects ({commit}) {
    commit(types.READ_PROJECTS);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
