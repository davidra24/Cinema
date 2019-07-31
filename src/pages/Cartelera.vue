<template>
  <Navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2>Cartelera</h2>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">Hola</div>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script>
import Navbar from "../components/navbar/Navbar";
export default {
  name: "Cartelera",
  components: {
    Navbar
  }
};
</script>

<style>
h2 {
  margin: 1em;
}
</style>
