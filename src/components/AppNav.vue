<template>
  <nav class="navbar navbar-expand-lg bg-success-subtle">
    <div class="container">
      <span class="navbar-brand">BLOG</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <div v-for="menu in menuItems">
           <li class="nav-item" v-if="menu.isLoggedIn">
             <router-link class="nav-link" :to="menu.to">{{ menu.title }}</router-link>
           </li>
         </div>
          
        </ul>
       
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';


const menuItems = computed(()=>{
  return [
    {
      title: 'Nyitó oldal',
      to: '/',
      isLoggedIn: true
    },
    {
      title: 'Bejelentkezés',
      to: '/bejelentkezes',
      isLoggedIn: true
    },
    {
      title: 'Regisztráció',
      to: '/regisztracio',
      isLoggedIn: true
    },
  ]
});

</script>

<style lang="scss" scoped></style>