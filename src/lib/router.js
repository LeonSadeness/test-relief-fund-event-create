import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import AboutMe from '@/pages/AboutMe.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'DefaultLayout'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutMe,
    meta: {
      layout: 'DefaultLayout'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
