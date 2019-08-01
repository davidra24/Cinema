import Vue from 'vue';
import Router from 'vue-router';
import Cartelera from '../pages/Cartelera';
import Cupones from '../pages/Cupones';
import Pelicula from '../pages/Pelicula';
import NotFound from '../components/notFound/NotFound';
import Reserva from '../pages/Reserva';
import Reservas from '../pages/Reservas';
import firebase from "firebase";

Vue.use(Router);

const router= new Router({
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
      path: '/reservas',
      name: 'Reservas',
      component: Reservas,
      meta:{
        autenticado:true
      }
    },
    {
      path: '/reserva/:id/:id_pelicula',
      name: 'Reserva',
      component: Reserva,
      meta:{
        autenticado:true
      }
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
      meta:{
        autenticado:true
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
router.beforeEach((to, from, next) => {
  let usuario= firebase.auth().currentUser;
  let autorizacion= to.matched.some(record=>record.meta.autenticado);
  if(autorizacion && !usuario){
    next('cartelera');
  
  }else{
    next();
  }
})

export default router;
