import { createRouter, createWebHistory } from '@ionic/vue-router';
import Reservas from '@/views/Reservas.vue';
import HomePage from '../views/HomePage.vue'
const routes = [
  
    
  {
    path: '/',
    component: Reservas
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
