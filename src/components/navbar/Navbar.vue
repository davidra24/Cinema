<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">
        Cine
        <strong>Hub</strong>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="navbar-brand" to="/cartelera">
              Películas
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <!--<div v-if="auth">
            <li class="nav-item">
              <router-link class="navbar-brand" to="/cupones">Cupones</router-link>
            </li>
          </div>-->
          <div v-if="auth">
            <li class="nav-item">
              <router-link class="navbar-brand" to="/reservas">Reservas</router-link>
            </li>
          </div>
        </ul>
        <div v-if="auth">
          <div v-if="loading">
            <Miniloading />
          </div>
          <div v-else>
            <button
              class="btn btn-outline-danger my-2 my-sm-0"
              @click="logout"
              type="button"
            >Cerrar sesión</button>
          </div>
        </div>
        <div v-else>
          <!-- <form @submit.prevent="login" class="form-inline my-2 my-lg-0">-->
          <div v-if="loading">
            <Miniloading />
          </div>
          <div v-else>
            <form class="form-inline my-2 my-lg-0">
              <input
                v-model="usuario"
                class="form-control mr-sm-2"
                type="text"
                placeholder="Usuario"
                aria-label="Search"
              />
              <input
                v-model="contrasena"
                class="form-control mr-sm-2"
                type="password"
                placeholder="Contraseña"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                @click="login"
                type="button"
              >Iniciar sesión</button>
              <button
                class="btn btn-outline-warning my-2 my-sm-0"
                @click="register"
                type="button"
              >Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    <div v-if="auth">
      <slot :session="auth" />
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../../firebase/firebaseDB";
import Miniloading from "../loading/Miniloading";
export default {
  name: "Navbar",
  components: {
    Miniloading
  },
  data() {
    return {
      loading: false,
      usuario: "",
      contrasena: "",
      auth: ""
    };
  },
  mounted() {
    this.isLoggued();
  },
  methods: {
    isLoggued() {
      this.auth = firebase.auth().currentUser.uid;
    },
    login() {
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          user => {
            this.auth = user.user.email;
            this.$swal({
              position: "top-end",
              type: "success",
              title: "Sesión iniciada",
              showConfirmButton: false,
              timer: 1500
            });
            this.credential(user.user.uid);
            this.loading = false;
          },
          error => {
            this.$swal({
              position: "top-end",
              type: "error",
              title: `${error.message}`,
              showConfirmButton: false,
              timer: 1500
            });
            this.loading = false;
          }
        );
    },
    logout() {
      this.loading = true;
      firebase
        .auth()
        .signOut()
        .then(user => {
          this.auth = null;
          localStorage.removeItem("user");
          this.$swal({
            position: "top-end",
            type: "success",
            title: "Sesión cerrada",
            showConfirmButton: false,
            timer: 1500
          });
          this.loading = false;
        });
    },
    register(e) {
      this.loading = true;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          user => {
            this.$swal({
              position: "top-end",
              type: "success",
              title: "Se ha creado una cuenta nueva",
              showConfirmButton: false,
              timer: 1500
            });
            this.login();
            ///this.$router.go({ path: this.$router.path });
            this.loading = false;
          },
          err => {
            this.$swal({
              position: "top-end",
              type: "error",
              title: `${err.message}`,
              showConfirmButton: false,
              timer: 1500
            });
            this.loading = false;
          }
        );
      e.preventDefault();
    },
    credential(uuid) {
      db.collection("cliente")
        .doc(uuid)
        .set({ id: uuid, usuario: this.usuario });
    }
  }
};
</script>

<style>
</style>