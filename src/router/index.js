import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/user/RegistrationView.vue'
import LoginView from '../views/user/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView},
    { path: '/regisztracio', component: RegistrationView},
    { path: '/bejelentkezes', component: LoginView},
    
   
  ]
})

export default router
