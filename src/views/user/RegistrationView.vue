<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="display-4 text-center my-5">Regisztráció</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 mx-auto">
        <form @submit.prevent="onRegiter">
          <div class="form-floating mb-3">
            <input 
              type="text" 
              class="form-control" 
              id="name" 
              placeholder="Név" 
              v-model="regForm.name">
            <label for="name">Név</label>
          </div>

          <div class="form-floating mb-3">
            <input 
              type="email" 
              class="form-control" 
              id="email" 
              placeholder="E-mail"
              v-model="regForm.email">
            <label for="email">E-mail</label>
          </div>
          <div class="form-floating mb-3">
            <input 
              type="password" 
              class="form-control" 
              id="password" 
              placeholder="Jelszó"
              v-model="regForm.password">
            <label for="password">Jelszó</label>
          </div>

          <div class="form-floating mb-3">
            <input 
              type="password" 
              class="form-control" 
              id="password_confirmation" 
              placeholder="Jelszó újra"
              v-model="regForm.confirm_password">
            <label for="password_confirmation">Jelszó újra</label>
          </div>

          <div class="mb-3">
            <button type="submit" class="btn btn-primary w-100 py-3 mt-3">Regisztráció</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const regForm = ref({
  name : '',
  email: '',
  password: '',
  confirm_password:'',
  role: 0
});


function onRegiter(){
  console.log(regForm.value);
}
</script>

<style lang="scss" scoped></style>