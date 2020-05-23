<template>
  <main id="main">
    <v-container fluid>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-container>
  </main>
</template>

<script>
  export default {
    name: 'AppMain',

    mounted() {
      var height = window.innerHeight;
      document.getElementById("main").style.height = height + "px";
    }
  }
</script>

<style scoped>
  main {
    padding-left: 250px;
  }

  @media only screen and (max-width: 1024px) {
    main {
      padding-left: 0;
    }
  }
</style>