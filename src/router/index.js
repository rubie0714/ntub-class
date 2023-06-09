import { createRouter, createWebHashHistory } from 'vue-router';
import Curriculum from '@/views/Curriculum.vue';
const routes = [
  {
    path: '/',
    component: Curriculum,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;