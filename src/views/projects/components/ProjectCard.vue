<template>
  <v-card hover>
    <v-card-row :img="project.image" height="300px"></v-card-row>
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