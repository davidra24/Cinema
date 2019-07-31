<template>
  <Navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2>Cartelera</h2>
          <div class="row">
            <div>
              <div v-for="movie in movies" :key="movie.id" class="col-12 col-md-6 col-lg-4">
                <Cartel :pelicula="movie" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "../components/navbar/Navbar";
import Cartel from "../components/cartelera/Cartel";
export default {
  name: "Cartelera",
  data() {
    return {
      movies: []
    };
  },
  components: {
    Navbar,
    Cartel
  },
  mounted() {
    movies = $store.getters;
  },
  computed: {
    movies: mapGetters(["getMovies"])
  }
};
</script>

<style>
h2 {
  margin: 1em;
}
</style>
