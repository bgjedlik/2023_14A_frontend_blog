import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/user/RegistrationView.vue'
import LoginView from '../views/user/LoginView.vue'
import BlogsView from '../views/blog/BlogsView.vue'
import NewBlogView from   '../views/blog/NewBlogView.vue'

import { useUserStore } from '../stores/userstore'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView},
    { path: '/regisztracio', component: RegistrationView},
    { path: '/bejelentkezes', component: LoginView},
    { path: '/blogok', component: BlogsView},
    { path: '/ujblog', component: NewBlogView},
    
   
  ]
})

router.beforeEach((to,from,next) =>{
  const {status} = storeToRefs(useUserStore());
  const publicPages = ['/','/bejelentkezes','/regisztracio','/blogok'];
  const autRequired = !publicPages.includes(to.path);
  if (autRequired && !status.value.loggedIn){
    return next('/bejelentkezes')
  }
  next(); // tovább a to-ra
});

export default router
