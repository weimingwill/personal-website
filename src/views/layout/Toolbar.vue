<template>
  <v-toolbar fixed class="deep-orange" light>
    <v-toolbar-side-icon light @click.native.stop="onIconClicked"></v-toolbar-side-icon>
    <v-toolbar-title>Weiming's Website</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Toolbar',

    methods: {
      onIconClicked () {
        this.$emit('iconClicked')
      }
    }
  }
</script>
