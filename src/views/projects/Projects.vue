<template>
  <v-container fluid>
    <v-layout row justify-space-between v-for="(projects, rowIndex) in projectRows" :key="rowIndex">
      <v-flex xs4 class="pb-4" v-for="(project, index) in projects" :key="index">
        <project-card :project="project"></project-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ProjectCard from './components/ProjectCard.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Project',

    components: {
      ProjectCard
    },

    computed: {
      ...mapGetters([
        'projectRows'
      ])
    },

    methods: {
      ...mapActions([
        'readProjects'
      ])
    },

    created () {
      this.readProjects()
    }
  }
</script>

<style scoped>
  .container {
    padding: 0;
  }
</style>