<template>
  <v-card hover raised class="project-card">
    <input v-model="project.href" type="hidden">
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

    props: ['project'],

    methods: {
      cardClickEvent (action) {
        let $cards = document.getElementsByClassName('project-card');
        Array.from($cards).forEach(($card) => {
          let $input = $card.firstChild
          if (action === 'add') {
            if ($input.name !== '1') {
              $card.addEventListener('click', () => this.onCardClicked($input.value))
              $input.name = '1'
            }
          } else if (action === 'remove') {
            $card.removeEventListener('click', () => this.onCardClicked($input.value))
          }
        })
      },

      onCardClicked (link) {
        if (link) {
          window.open(link)
        }
      }
    },

    mounted () {
      this.cardClickEvent('add');
    },

    beforeDestroy () {
      this.cardClickEvent('remove');
    }
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