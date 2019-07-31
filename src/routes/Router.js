import Vue from 'vue';
import Router from 'vue-router';
import Cartelera from '../pages/Cartelera';
import Cupones from '../pages/Cupones';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Cartelera',
      component: Cartelera,
    },
    {
      path: '/cupones',
      name: 'Cupones',
      component: Cupones,
    },
  ],
});
