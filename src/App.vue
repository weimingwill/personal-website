<template>
  <div id="app">
    <v-app top-toolbar left-sidebar>
      <sidebar :drawer="drawer" :isSmallScreen="isSmallScreen" :isIconClicked="isIconClicked"></sidebar>
      <toolbar v-if="isSmallScreen" v-on:iconClicked="showSidebar"></toolbar>
      <app-main :isSmallScreen="isSmallScreen"></app-main>
    </v-app>
  </div>
</template>

<script>
  import Sidebar from './views/layout/Sidebar.vue'
  import Toolbar from './views/layout/Toolbar.vue'
  import AppMain from './views/layout/AppMain.vue'

  export default {
    name: 'app',

    components: {
      Sidebar,
      Toolbar,
      AppMain
    },

    methods: {
      handleResize () {
        let width = (window.innerWidth > 0) ? window.innerWidth : screen.width
        if (width < 1024) {
          this.isSmallScreen = true
          this.drawer = false
          this.removeOverlay()
        } else {
          this.isSmallScreen = false
          this.drawer = true
          this.removeOverlay()
        }
      },

      showSidebar () {
        this.isIconClicked = !this.isIconClicked
      },

      removeOverlay () {
        let $overlay = document.getElementsByClassName('overlay')
        if ($overlay.length > 0) {
          $overlay[0].classList.remove('overlay--active')
        }
      }
    },

    data() {
      return {
        drawer: false,
        isIconClicked: false,
        isSmallScreen: false
      }
    },

    mounted () {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
    },

    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize)
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/font-awesome/css/font-awesome.min.css'
  @import '../node_modules/vuetify/src/stylus/main';
  @import 'css/google-material-icons.css';
  @import 'css/main.css';
</style>
