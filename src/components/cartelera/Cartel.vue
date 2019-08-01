<template>
  <div class="cart">
    <router-link :to="`/cartelera/${pelicula.id}`">
      <img class="resize image-fluid" :src="pelicula.imagen" :alt="`${pelicula.id}`" />
      <strong class="centered">{{this.pelicula.nombre}}</strong>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["pelicula"],
  name: "Cartel",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style>
.resize {
  width: 250px;
  height: 357px;
}
.cart {
  margin: 30px;
}
.centered {
  width: 150px;
  position: absolute;
  bottom: 20px;
  right: -50px;
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}
</style>