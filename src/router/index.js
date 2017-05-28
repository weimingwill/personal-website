import Vue from 'vue'
import Router from 'vue-router'
import menuModule from 'vuex-store/modules/menu'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: require('../views/About.vue')
    },
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '*',
      redirect: '/'
    }
  ]
})

function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i];
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.subItems, routes)
    }
  }
  return routes
}
