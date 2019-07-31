import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '../firebase';

Vue.use(Vuex);
Vue.use(firebase);

const db = firebase.database;
var movieRef = db.collection('pelicula');

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
  getters: {
    getMovies: () => {
      console.log(movieRef.get());

      return movieRef.get();
    },
  },
});
