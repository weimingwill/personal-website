<template>
  <v-navigation-drawer permanent light class="elevation-5 sidebar">
    <v-container class="avatar-container text-xs-center pt-5">
      <div class="image-cropper elevation-1 mb-4">
        <img class="avatar" src="../../assets/images/avatar.jpg">
      </div>
      <p class="avatar-header">
        Zhuang Weiming
      </p>
    </v-container>
    <v-list dense>
      <v-list-item v-for="item in menuitems" :key="item">
        <v-list-tile :href="item.path" :router="item.router">
          <v-list-tile-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="list-title">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Sidebar',

    computed: {
      ...mapGetters([
        'menuitems'
      ]),
    },
  }
</script>

<style lang="stylus" scoped>
  /* sidebar */
  .sidebar {
    width: 250px;
  }

  /* avatar */
  .avatar-container {
    text-align: center;
  }

  .image-cropper {
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
  }

  .avatar-header {
    margin-top: 10px;
  }

  .avatar {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
  }

  /* active tab */
  .list__tile--active .list__tile__title {
    font-weight: bold;
    color: #58acff !important;
  }

  .list__tile__title {
    font-size: 14px;
    color: #424242;
    margin-left: 10px;
  }
</style>