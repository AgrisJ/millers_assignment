import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CategoryView from '@/views/CategoryView.vue';
import StyleDetailsView from '@/views/StyleDetailsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/style/:id',
      name: 'style',
      component: StyleDetailsView,
    },
  ],
});

export default router;
