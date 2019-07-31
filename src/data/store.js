import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    authId: '',
    movies: '',
    coupons: [],
    show: [],
    reservation: [],
  },
  mutations: {},
  actions: {},
  getters: {},
});
