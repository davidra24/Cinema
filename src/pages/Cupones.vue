<template>
  <Navbar>
    <div class="container-fluid d-flex justify-content-center">
      <div class="row">
        <div class="col-12">
          <h1>
            <strong>Cupones</strong>
          </h1>
          <div v-if="loading">
            <Loading />
          </div>
          <div class="row" v-else>
            <div v-for="coupon in coupons" :key="coupon.id">
              <div class="space">
                <button class="btn btn-block btn-success round">
                  <font-awesome-icon icon="gift" size="10x" />
                  <h3>
                    <strong>{{coupon.descuento}}</strong>
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script>
import db from "../firebase/firebaseDB";
import Navbar from "../components/navbar/Navbar";
import Loading from "../components/loading/Loading";
export default {
  name: "Cupones",
  data() {
    return {
      loading: true,
      coupons: []
    };
  },
  components: {
    Navbar,
    Loading
  },
  methods: {
    get() {
      db.collection("cupon")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              descuento: doc.data().descuento,
              valor: doc.data().valor
            };
            this.coupons.push(data);
          });
          this.loading = false;
        });
    }
  },
  mounted() {
    this.get();
  }
};
</script>

<style>
.space {
  margin: 20px;
}
.round {
  border-radius: 20%;
}
</style>

