<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6 v-for="(project, index) in projects" :key="index">
        <project-card :project="project"></project-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { ProjectCard } from './components/ProjectCard.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Project',

    components: {
      ProjectCard
    },

    computed: {
      ...mapGetters([
        'projects'
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