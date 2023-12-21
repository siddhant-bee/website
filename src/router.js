// src/router.js

import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import MyHome from './components/MyHome.vue';
import menu from './components/MyMenu.vue';
import MyCareer from './components/MyCareer.vue';
import MyContact from './components/MyContact.vue';
// import About from './views/About.vue';
const routes = [
  {
    path: '/',
    component: MyHome,
    name: 'MyHome',
  },
  {
    path: '/menu',
    component: menu,
    name: 'menu',
  },
  {
    path: '/career',
    component: MyCareer,
    name: 'MyCareer',
  },
  {
    path: '/contact',
    component: MyContact,
    name: 'MyContact',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
