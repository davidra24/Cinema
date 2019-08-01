import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    user: null,
    authId: '',
    movies: '',
    coupons: [],
    show: [],
    reservation: [],
  },
  mutations: {
    getMovies() {},
    setLoading(value) {
      this.state.loading = value;
    },
  },
  actions: {},
});
