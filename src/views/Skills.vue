<template>
  <v-container fluid>
    <v-container fluid>
      <h4 class="skill-header">Programming Skills</h4>
      <v-container fluid class="tag-container">
        <v-chip outline class="red red--text" v-for="(tag, index) in skills.programming.lang" :key="index">{{ tag }}</v-chip>
        <v-chip outline class="primary primary--text" v-for="(tag, index) in skills.programming.frontend" :key="index">{{ tag }}</v-chip>
        <v-chip outline class="pink pink--text" v-for="(tag, index) in skills.programming.backend" :key="index">{{ tag }}</v-chip>
        <v-chip outline class="green green--text" v-for="(tag, index) in skills.programming.mobile" :key="index">{{ tag }}</v-chip>
        <v-chip outline class="green green--text" v-for="(tag, index) in skills.programming.others" :key="index">{{ tag }}</v-chip>
      </v-container>
    </v-container>

    <v-container fluid>
      <h4 class="skill-header">Other Skills</h4>
      <v-container fluid class="tag-container">
        <v-chip outline class="secondary secondary--text" v-for="(tag, index) in skills.others.core" :key="index">{{ tag }}</v-chip>
        <v-chip outline class="secondary secondary--text" v-for="(tag, index) in skills.others.app" :key="index">{{ tag }}</v-chip>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: "Skills",

    computed: {
      ...mapGetters([
        'skills'
      ])
    },

    methods: {
      ...mapActions([
        'readSkills'
      ])
    },

    created () {
      this.readSkills()
    }
  }
</script>

<style scoped>
  .skill-header {
    text-align: center;
    margin-bottom: 20px;
  }
  .tag-container {
    text-align: center;
  }
</style>