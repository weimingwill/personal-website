<template>
  <v-container fluid>
    <div class="project-layout">
      <div class="project-column" v-for="(projects, rowIndex) in projectCols" :key="rowIndex">
        <project-card v-for="(project, index) in projects" :key="index" :project="project"></project-card>
      </div>
    </div>
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
        'projects',
        'getProjectCols'
      ])
    },

    methods: {
      ...mapActions([
        'readProjects'
      ]),

      handleResize() {
        let width = (window.innerWidth > 0) ? window.innerWidth : screen.width
        this.projectCols = this.getProjectCols(width)
      }
    },

    data () {
      return {
        projectCols: []
      }
    },

    created () {
      this.readProjects()
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

<style scoped type="scss">
  .container {
    padding: 0;
  }

  .project-layout {
    display: flex;
    flex-direction: column;
  }

  .project-column {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
  }

  @media only screen and (min-width: 1440px) {
    .project-layout {
      flex-direction: row;

    }

    .project-column {
      width: calc(100%/3);
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    .project-layout {
      flex-direction: row;

    }

    .project-column {
      width: calc(100%/2);
    }
  }

  @media only screen and (max-width: 600px) {
    .project-layout {
      flex-direction: column;

    }

    .project-column {
      width: 100%;
    }
  }

</style>