<script setup>
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue';
</script>

<template>
   <AppHeader/>
   <AppNav/>   
   <RouterView />
   <AppFooter/>
</template>

<style scoped>

</style>
