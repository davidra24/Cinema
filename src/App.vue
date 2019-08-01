<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "app",
  components: {}
};
</script>

<style scoped>
body {
  background-image: url("https://gallery.yopriceville.com/var/albums/Backgrounds/Cinema_Background.jpg?m=1399676400");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
