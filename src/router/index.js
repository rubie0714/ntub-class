import { createRouter, createWebHashHistory } from 'vue-router';
import Curriculum from '@/views/Curriculum.vue';
import Home from '@/views/Home.vue';
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/classtable/:id?',
    component: Curriculum,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;