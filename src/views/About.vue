<template>
  <v-container fluid>
    <h5 class="about-header">Hi, (＾_＾)／</h5>
    <h5 class="about-header">I'm Weiming,</h5>
    <h5 class="about-header">A <span class="developer">developer</span> and <span class="pm">product manager</span></h5>
    <h5 class="about-header red--text text--lighten-1">with a passion for building tools that improves living quality</h5>

    <p class="header-icon"><v-icon x-large class="yellow--text text--darken-2">lightbulb_outline</v-icon></p>
    <h5 class="about-header">
      <span class="tech">Technologies</span> |
      <span class="product">Elegant Products</span>
    </h5>

    <p class="header-icon"><v-icon x-large class="red--text">favorite_border</v-icon></p>
    <h6 class="about-header">
      <span class="orange--text tex--lighten-2 mr-1"><v-icon class="orange--text tex--lighten-2">brush</v-icon> Calligraphy</span>
      <span class="green--text text--lighten-2 mr-1"><v-icon fa class="green--text text--lighten-2">book</v-icon> Reading</span>
      <span class="light-blue--text text--lighten-2 mr-1">Table tennis</span>
      <span class="red--text text--lighten-3"><v-icon class="red--text text--lighten-3">music_note</v-icon> Music</span>
    </h6>


    <p class="header-icon"><v-icon x-large class="green--text">school</v-icon></p>
    <h6 class="about-header">
      <span class="edu"></span>
      National Unviersity of Singapore
    </h6>

    <p class="header-icon"><v-icon x-large class="blue--text">card_travel</v-icon></p>
    <h6 class="about-header">
      <span class="work"></span>
      GATCoin (Singapore)
    </h6>

  </v-container>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>
  .container {
    text-align: center;
  }
  .about-header {
    text-align: center;
  }
  .about-header:nth-child(1) {
    margin-bottom: 20px;
  }
  .tech, .product {
    border-bottom: 1px dashed;
  }
  .developer, .pm {
    font-weight: bold;
  }
  .header-icon {
    margin: 35px 0 15px 0;
  }
  h6 {
    font-weight: normal;
  }
</style>
