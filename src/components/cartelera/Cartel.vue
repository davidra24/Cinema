<template>
  <div class="cartel">
    <router-link to="'/cartelera/'+pelicula.id">
      <img v-src="this.pelicula.imagen" alt />
      <strong>{{this.pelicula.nombre}}</strong>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["pelicula"],
  name: "Cartel",
  data() {
    return {};
  }
};
</script>

<style>
.cartel {
  width: 5em;
  height: 8em;
}
</style>