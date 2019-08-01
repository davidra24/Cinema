<template>
  <Navbar>
    <div class="container-fluid d-flex justify-content-center">
      <div class="row">
        <div class="col-12">
          <div v-if="loading||loadingFunctions">
            <Loading />
          </div>
          <div v-else>
            <h1>{{nombre}}</h1>
            <div v-if="video">
              <Video :video-id="video"></Video>
            </div>
            <br />
            <ul class="list-group" v-for="funcion in funciones" :key="funcion.id">
              <li
                class="list-group-item"
              >Fecha: {{funcion.fecha}} Hora: {{funcion.hora}} Sala: {{funcion.nombre_sala}} Valor:{{funcion.valor}} Valor con descuento: {{funcion.valor-(funcion.valor*funcion.descuento)}}</li>
              <router-link
                :to="`/reserva/${funcion.id}/${funcion.id_pelicula}`"
                class="btn btn-info btn-block"
              >Reservar</router-link>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script>
import db from "../firebase/firebaseDB";
import Navbar from "../components/navbar/Navbar";
import Video from "../components/video/Video";
import Loading from "../components/loading/Loading";
export default {
  name: "Pelicula",
  data() {
    return {
      loading: true,
      loadingFunctions: true,
      id: this.$route.params.id,
      video: null,
      nombre: null,
      funciones: []
    };
  },
  methods: {
    getFunctions() {
      db.collection("funcion")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const _id = doc.data().id_pelicula;
            if (_id == this.id) {
              const data = {
                id: doc.id,
                ...doc.data()
              };
              console.log(data);
              this.funciones.push(data);
            }
          });
          this.loadingFunctions = false;
        });
    },
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
    this.getFunctions();
  },
  components: {
    Navbar,
    Video,
    Loading
  }
};
</script>

<style>
.form-section {
  color: white;
  background-color: rgb(63, 63, 63);
}
</style>
