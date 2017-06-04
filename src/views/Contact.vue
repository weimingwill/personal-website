<template>
  <v-container fluid>
    <v-layout row justify-space-around>
      <div class="contact-method">
        <v-btn icon><v-icon fa>envelope</v-icon></v-btn>
        <p>Email</p>
      </div>
      <div class="contact-method">
        <v-btn icon><v-icon fa>github</v-icon></v-btn>
        <p>Github</p>
      </div>
      <div class="contact-method">
        <v-btn icon><v-icon fa>linkedin</v-icon></v-btn>
        <p>Linkedin</p>
      </div>
      <div class="contact-method">
        <v-btn icon><v-icon fa>weixin</v-icon></v-btn>
        <p>微信公众号</p>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Contact"
  }
</script>

<style lang="stylus" scoped>
  .container {
  }
  .btn--icon {
    height: 100px;
    width: 100px;
  }
  .icon {
    font-size: 5rem;
    color: rgba(0,0,0,0.54);
  }
  .contact-method {
    text-align: center
  }
</style>