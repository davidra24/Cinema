<template>
  <Navbar>
    <div class="container-fluid d-flex justify-content-center">
      <div class="row">
        <div class="col-12">
          <h2>Cartelera</h2>
          <div v-if="loading">
            <Loading />
          </div>
          <div class="row" v-else>
            <div v-for="movie in movies" :key="movie.id" class="row">
              <Cartel :pelicula="movie" class="col-12 col-md-6 col-lg-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script>
import db from "../firebase/firebaseInit";
import Navbar from "../components/navbar/Navbar";
import Cartel from "../components/cartelera/Cartel";
import Loading from "../components/loading/Loading";
export default {
  name: "Cartelera",
  data() {
    return {
      loading: true,
      movies: []
    };
  },
  components: {
    Navbar,
    Cartel,
    Loading
  },
  methods: {
    get() {
      db.collection("pelicula")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              nombre: doc.data().nombre,
              imagen: doc.data().imagen
            };
            this.movies.push(data);
          });
          this.loading = false;
        });
    }
  },
  mounted() {
    this.get();
  },
  computed: {}
};
</script>

<style>
h2 {
  margin: 1em;
}
</style>
