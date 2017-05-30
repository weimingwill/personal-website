<template>
  <main>
    <v-container fluid>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-container>
  </main>
</template>

<script>
  export default {
  }
</script>

<style>
  main {
    padding-left: 250px !important;
  }
</style>