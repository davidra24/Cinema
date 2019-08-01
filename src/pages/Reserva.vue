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
            <br />
            <label class="bg-w">Número de sillas</label>
            <select class="form-control" v-model="numero_sillas" @change="onChange">
              <option v-for="value in values" :key="value" :value="value">{{value}}</option>
            </select>
            <br />
            <button class="btn btn-success btn-block" @click="post">Reservar</button>
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
import firebase from "firebase";
export default {
  name: "Reserva",
  data() {
    return {
      session: firebase.auth().currentUser.uid,
      values: 0,
      numero_sillas: 1,
      id_reserva: 0,
      loading: true,
      loadingPelicula: true,
      id: this.$route.params.id,
      id_pelicula: this.$route.params.id_pelicula,
      descuento: null,
      fecha: null,
      hora: null,
      sala: null,
      valor: 0,
      sillasTotales: 0,
      sillasOcupadas: 0,
      base: 0,
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
    onChange() {
      const total = parseInt(this.numero_sillas * this.base);
      this.valor = total;
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
          this.id_reserva = data.id;
          this.descuento = data.descuento;
          this.id_pelicula = data.id_pelicula;
          this.fecha = data.fecha;
          this.hora = data.hora;
          this.sala = data.nombre_sala;
          this.valor = data.valor;
          this.base = this.valor;
          this.sillasTotales = data.sillas_totales;
          this.sillasOcupadas = data.sillas_ocupadas;
          this.values = this.sillasTotales - this.sillasOcupadas + 1;
          this.loading = false;
        });
    },
    post() {
      db.collection("reservas")
        .add({
          usuario: this.session,
          numero_sillas: this.numero_sillas,
          id_funcion: this.$route.params.id,
          id_pelicula: this.$route.params.id_pelicula,
          descuento: this.descuento,
          fecha: this.fecha,
          hora: this.hora,
          sala: this.sala,
          valor: this.valor,
          valorTotal:
            parseInt(this.valor) - parseInt(this.valor * this.descuento),
          imagen: this.imagen,
          nombre_pelicula: this.nombre
        })
        .then(() => {
          db.collection("funcion")
            .doc(this.id_reserva)
            .update({
              sillas_ocupadas: parseInt(
                this.sillasTotales - (this.sillasTotales - this.numero_sillas)
              )
            });
          this.$router.push("/reservas");
        });
    }
  },
  async mounted() {
    this.session = firebase.auth().currentUser.uid;
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
.bg-w {
  color: white;
}
.resize {
  width: 340px;
  height: 470px;
}
</style>

