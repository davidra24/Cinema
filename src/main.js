import Vue from 'vue';
import App from './App.vue';
import router from './routes/Router';
import store from './data/store';
import background from './assets/background.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueSweetalert2 from 'vue-sweetalert2';

library.add(faGift);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});

var style = document.createElement('style');
style.innerHTML = `
body {
  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  
}
`;
document.head.appendChild(style);
