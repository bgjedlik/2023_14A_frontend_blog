<template>
    <div class="container">
        <h1 class="display-5 mt-5">Új blog</h1>
        <div class="row">
            <div class="col-12 col-md-5">
                <div class="mb-3">
                    <label for="" class="form-label">Cím:</label>
                    <input type="text" class="form-control" 
                        v-model="newBlog.title">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Szöveg:</label>
                    <textarea class="form-control" rows="6" 
                        v-model="newBlog.description"></textarea>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="onSave">Elküld</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const newBlog = ref({
    title: '',
    description: ''
});

function onSave() {
 console.log(newBlog.value);
}
</script>

<style lang="scss" scoped></style>