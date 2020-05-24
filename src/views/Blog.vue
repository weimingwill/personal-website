<template>
  <v-container>
    <div class="iframe-container">
      <iframe src="https://blog.weiming.me/archives" allowfullscreen></iframe>
    </div>
    <div class="button-container">      
      <v-btn rounded primary light @click.native="redirect">>> Blog Site</v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: "Blog",

    methods: {
      redirect() {
        var site = "https://blog.weiming.me"
        if (window.location.hostname !== "") {
          site = "https://blog." + window.location.hostname
        }
        window.open(site)
      },
    },
  }
</script>

<style scoped>
  .iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
  }

  .iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
  }

  .button-container {
    text-align: center;
    width: 100%;
    margin-top: 2%;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    .iframe-container {
      height: 800px;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 1024px) {
    .iframe-container {
      height: 800px;
    }

    .button-container {
      margin-top: 4%;
    }
  }

  @media only screen and (max-width: 600px) {
    .iframe-container {
      height: 550px;
    }

    .button-container {
      margin-top: 4%;
    }
  }
</style>