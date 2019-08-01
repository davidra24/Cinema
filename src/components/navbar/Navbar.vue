<template>
  <div>
    <h1>Bienvenido a cinemas Riaño</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Cinemas Riaño</router-link>
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
          <li class="nav-item">
            <router-link class="navbar-brand" to="/cupones">Cupones</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Usuario" aria-label="Search" />
          <input
            class="form-control mr-sm-2"
            type="password"
            placeholder="Contraseña"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </form>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {}
};
</script>

<style>
</style>