import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FormView from '../views/FormView.vue';
import ServiceView from '../views/ServiceView.vue';
import DetailsView from '../views/DetailsView.vue';
import SuccessView from '../views/SuccessView.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Form',
    name: 'Form',
    component: FormView,
  },
  {
    path: '/Service',
    name: 'Service',
    component: ServiceView,
  },
  {
    path: '/Details',
    name: 'Details',
    component: DetailsView,
  },
  {
    path: '/Success',
    name: 'Success',
    component: SuccessView,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'             
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // <-- ¡Solución!
  routes,
});

export default router;
