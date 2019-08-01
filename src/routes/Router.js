import Vue from 'vue';
import Router from 'vue-router';
import Cartelera from '../pages/Cartelera';
import Cupones from '../pages/Cupones';
import Pelicula from '../pages/Pelicula';
import NotFound from '../components/notFound/NotFound';
import Reserva from '../pages/Reserva';

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
      path: '/cartelera',
      name: 'Cartelera',
      component: Cartelera,
    },
    {
      path: '/reserva/:id/:id_pelicula',
      name: 'Reserva',
      component: Reserva,
    },
    {
      path: '/cartelera/:id',
      name: 'Pelicula',
      component: Pelicula,
    },
    {
      path: '/cupones',
      name: 'Cupones',
      component: Cupones,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
