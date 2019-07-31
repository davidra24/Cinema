import Vue from 'vue';
import App from './App.vue';
import router from './routes/Router';
import store from './data/store';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
