<template>
  <Navbar>
    <div class="container-fluid d-flex justify-content-center">
      <div class="row">
        <div class="col-12">
          <div v-if="loading">
            <Loading />
          </div>
          <div v-else>
            <h2>{{nombre}}</h2>
            <div v-if="video">
              <Video :video-id="video"></Video>
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
import Video from "../components/video/Video";
import Loading from "../components/loading/Loading";
export default {
  name: "Pelicula",
  data() {
    return {
      loading: true,
      id: this.$route.params.id,
      video: null,
      nombre: null
    };
  },
  methods: {
    get() {
      db.collection("pelicula")
        .doc(this.id)
        .get()
        .then(querySnapshot => {
          const data = {
            id: querySnapshot.id,
            ...querySnapshot.data()
          };
          this.nombre = data.nombre;
          this.video = data.video;
          this.loading = false;
        });
    }
  },
  mounted() {
    this.get();
  },
  components: {
    Navbar,
    Video,
    Loading
  }
};
</script>

<style>
</style>
