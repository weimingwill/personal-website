import * as types from '../mutation-types'

const PROJECTS = ['distributed-load-testing', 'programmer-comparison-system',
'inventory-system', 'airline-system',  'nus-bus']

const state = {
  projects: []
}

const getters = {
  projects: state => state.projects,

  getProjectCols: state => (width) => {
    let projectRows = []
      , i
      , numOfCol
      , length = state.projects.length
      , col = 0

    if (width > 1440) {
      numOfCol = 3
    } else if (1024 < width < 1440) {
      numOfCol = 2
    } else {
      numOfCol = 1
    }

    for (i = 0; i < length; i++) {
      if (!projectRows[col]) {
        projectRows[col] = []
      }

      projectRows[col].push(state.projects[i]);

      if (col === numOfCol - 1) {
        col = 0
      } else {
        col++
      }
    }
    return projectRows
  }
}

const mutations = {
  [types.READ_PROJECTS] (state) {
    state.projects = []
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
