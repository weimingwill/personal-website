<template>
  <div id="app">
    <v-app top-toolbar left-sidebar>
      <sidebar></sidebar>
      <app-main></app-main>
    </v-app>
  </div>
</template>

<script>
  import Sidebar from './views/layout/Sidebar.vue'
  import AppMain from './views/layout/AppMain.vue'

  export default {
    name: 'app',
    components: {
      Sidebar,
      AppMain
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/font-awesome/css/font-awesome.min.css'
  @import '../node_modules/vuetify/src/stylus/main';
  @import 'css/google-material-icons.css';
  @import 'css/main.css';
</style>
