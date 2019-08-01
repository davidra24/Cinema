<template>
  <Navbar>
    <h1>Bienvenido a sus reservas</h1>
    <div class="container d-flex justify-content-center">
      <div v-if="loading">
        <Loading />
      </div>
      <div v-else>
        <div v-for="reserva in reservas" :key="reserva.id">
          <div class="row">
            <div class="col-12 col-md-6">
              <img :src="reserva.imagen" class="resiz" alt="reserva.id" srcset />
            </div>
            <div class="col-12 col-md-6">
              <ul class="list-group">
                <li class="list-group-item">Película: {{reserva.nombre_pelicula}}</li>
                <li class="list-group-item">Fecha: {{reserva.fecha}}</li>
                <li class="list-group-item">Hora: {{reserva.hora}}</li>
                <li class="list-group-item">Sala: {{reserva.sala}}</li>
                <li class="list-group-item">Numero de sillas: {{reserva.numero_sillas}}</li>
                <li class="list-group-item">Descuento {{parseInt(reserva.descuento*100)}}%</li>
                <li class="list-group-item">Valor: {{reserva.valor}}</li>
                <li class="list-group-item">Valor total: {{reserva.valorTotal}}</li>
              </ul>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script>
import Navbar from "../components/navbar/Navbar";
import db from "../firebase/firebaseDB";
import firebase from "firebase";
import Loading from "../components/loading/Loading";
export default {
  name: "Reservas",
  data() {
    return {
      reservas: [],
      loading: true,
      user_id: firebase.auth().currentUser.uid
    };
  },
  components: {
    Navbar,
    Loading
  },
  methods: {
    get() {
      db.collection("reservas")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const session = doc.data().usuario;
            console.log(doc.data());
            if (session == this.user_id) {
              const data = {
                id: doc.id,
                ...doc.data()
              };
              this.reservas.push(data);
            }
          });
          this.loading = false;
        });
    }
  },
  mounted() {
    this.user_id = firebase.auth().currentUser.uid;
    this.get();
  }
};
</script>

<style>
.resiz {
  width: 320px;
  height: 450px;
}
</style>
