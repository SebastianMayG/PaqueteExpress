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
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
