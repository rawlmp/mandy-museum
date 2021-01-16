import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Hermitage',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/museo',
    name: 'Museo',
    component: () => import('../views/Museo.vue'),
  },
  {
    path: '/biblioteca',
    name: 'Biblioteca',
    component: () => import('../views/Biblioteca.vue'),
  },
  {
    path: '/talleres',
    name: 'Talleres',
    component: () => import('../views/Talleres.vue'),
  },
  {
    path: '/exposiciones',
    name: 'Exposiciones',
    component: () => import('../views/Exposiciones.vue'),
  },
  {
    path: '/bus',
    name: 'Bus Náutico',
    component: () => import('../views/Bus.vue'),
  },
  {
    path: '/restauracion',
    name: 'Restauración',
    component: () => import('../views/Restauracion.vue'),
  },
  {
    path: '/reservas',
    name: 'Reservas',
    component: () => import('../views/Reservas.vue'),
  },
  {
    path: '/ubicacion',
    name: 'Ubicación',
    component: () => import('../views/Ubicacion.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
