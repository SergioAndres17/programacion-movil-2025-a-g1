import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ClientPage from '@/views/ClientPage.vue';
import Teacher from '@/views/Teacher.vue';
import Student from '@/views/Student.vue';
import SupplierPage from '@/views/supplierPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/client',
    name: 'Client',
    component: ClientPage
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher
  },
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
  {path:'/supplier',
    name: 'Supplier',
    component: SupplierPage
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
