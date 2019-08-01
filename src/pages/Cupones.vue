<template>
  <Navbar>
    <div class="container-fluid d-flex justify-content-center">
      <div class="row">
        <div class="col-12">
          <h1>
            <strong>Cupones</strong>
          </h1>
          <div v-if="loading||loadingUserCupons||loadingAviableCupons">
            <Loading />
          </div>
          <div class="row" v-else>
            <div v-for="coupon in couponsRender" :key="coupon.id">
              <div v-if="coupon.reclamed" class="space">
                <button class="btn btn-block btn-danger round" @click="yaExisteCupon">
                  <font-awesome-icon icon="gift" size="10x" />
                  <h3>
                    <strong>{{coupon.descuento}}</strong>
                  </h3>
                </button>
              </div>
              <div v-else class="space">
                <button class="btn btn-block btn-success round" @click="noExisteCupon(coupon.id)">
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
import firebase, { firestore } from "firebase";
export default {
  name: "Cupones",
  data() {
    return {
      session: null,
      loading: true,
      loadingUserCupons: true,
      loadingAviableCupons: true,
      coupons: [],
      coupon_client: [],
      couponsRender: [],
      user: firebase.auth().currentUser
    };
  },
  components: {
    Navbar,
    Loading
  },
  methods: {
    getSession() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.session = user.uid;
          //this.$router.push("/cupones");
        } else {
          this.$router.push("/");
        }
      });
    },
    getCoupon() {
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
        })
        .then(() => {
          this.coupons.forEach(cupon => {
            var reclamed = false;
            this.coupon_client.forEach(cupon_c => {
              if (cupon_c.id == cupon.id) {
                reclamed = true;
              }
            });
            this.couponsRender.push(cupon);
            this.loadingUserCupons = false;
          });
        })
        .catch(error => {
          console.log("Error " + error);
        });
    },
    getUserCoupons() {
      db.collection("cupon_cliente")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const _id = doc.data().id_cliente;
            if (_id == this.session) {
              const data = {
                id: doc.id,
                ...doc.data()
              };
              this.coupon_client.push(data);
              this.loadingUserCupons = false;
            }
          });
          this.loadingAviableCupons = false;
        })
        .catch(error => {
          console.log("Error " + error);
        });
    },
    yaExisteCupon() {
      this.$swal({
        position: "top-end",
        type: "error",
        title: "Ya ha reclamado este cupón, no sea graroso",
        showConfirmButton: false,
        timer: 1500
      });
    },
    noExisteCupon(id_cupon) {
      this.$swal({
        position: "top-end",
        type: "success",
        title: "Cupón reclamado",
        showConfirmButton: false,
        timer: 1500
      });
    }
  },
  mounted() {
    this.getSession();
    this.getUserCoupons();
    this.getCoupon();
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

