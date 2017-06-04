<template>
  <v-card hover raised class="project-card">
    <v-card-row class="project-image-row">
      <img :src="project.image" class="project-img">
    </v-card-row>
    <v-container fluid class="project-content">
      <v-card-title class="project-title">{{ project.title }}</v-card-title>
      <v-card-text class="darken-3">
        <div v-text="project.description"></div>
      </v-card-text>
      <div>
        <v-chip v-for="(tag, index) in project.tags" :key="index">{{ tag }}</v-chip>
      </div>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'ProjectCard',

    props: ['project']
  }
</script>

<style scoped>
  .project-card {
    margin: 30px 30px;
  }
  .project-content {
    padding-top: 0;
  }
  .project-img {
    width: 100%;
  }
  .project-title {
    font-size: 20px;
  }
</style>