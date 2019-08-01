<template>
  <Navbar>
    <div class="container d-flex justify-content-center">
      <div v-if="loading||loadingPelicula">
        <Loading />
      </div>
      <div v-else>
        <h2>Reservar asientos para {{nombre}}</h2>
        <br />
        <div class="row">
          <div class="col-12 col-md-6">
            <img class="resize image-fluid" :src="imagen" alt srcset />
          </div>
          <div class="col-12 col-md-6">
            <ul class="list-group">
              <li class="list-group-item">Fecha: {{fecha}}</li>
              <li class="list-group-item">Hora: {{hora}}</li>
              <li class="list-group-item">Sala: {{sala}}</li>
              <li class="list-group-item">Descuento {{parseInt(descuento*100)}}%</li>
              <li class="list-group-item">Valor: {{valor}}</li>
              <li class="list-group-item">Valor total: {{parseInt(valor)-parseInt(valor*descuento)}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script>
import Loading from "../components/loading/Loading";
import Navbar from "../components/navbar/Navbar";
import db from "../firebase/firebaseDB";
export default {
  name: "Reserva",
  data() {
    return {
      loading: true,
      loadingPelicula: true,
      id: this.$route.params.id,
      id_pelicula: this.$route.params.id_pelicula,
      descuento: null,
      fecha: null,
      hora: null,
      sala: null,
      valor: 0,
      imagen: null,
      nombre: null
    };
  },
  methods: {
    getPelicula() {
      db.collection("pelicula")
        .doc(this.id_pelicula)
        .get()
        .then(querySnapshot => {
          const data = {
            id: querySnapshot.id,
            ...querySnapshot.data()
          };
          this.nombre = data.nombre;
          this.imagen = data.imagen;
          this.loadingPelicula = false;
        });
    },
    get() {
      db.collection("funcion")
        .doc(this.id)
        .get()
        .then(querySnapshot => {
          const data = {
            id: querySnapshot.id,
            ...querySnapshot.data()
          };
          this.descuento = data.descuento;
          this.id_pelicula = data.id_pelicula;
          this.fecha = data.fecha;
          this.hora = data.hora;
          this.sala = data.nombre_sala;
          this.valor = data.valor;
          this.loading = false;
        });
    }
  },
  async mounted() {
    this.get();
    this.getPelicula();
  },
  components: {
    Loading,
    Navbar
  }
};
</script>

<style>
.resize {
  width: 340px;
  height: 470px;
}
</style>

