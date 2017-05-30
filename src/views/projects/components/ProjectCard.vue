<template>
  <v-card hover raised>
    <v-card-row>
      <img :src="project.image" class="project-img">
    </v-card-row>
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-text class="blue-grey darken-3 white--text">
      <div v-text="project.description"></div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'ProjectCard',

    props: ['project']
  }
</script>

<style scoped>
  .project-img {
    width: 100%;
  }
</style>