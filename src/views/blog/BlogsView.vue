<template>
    <div class="container">
        <h1 class="display-5 mt-5">Blogok</h1>
        <div class="row">
            <div class="col-12" v-for="blog in blogs">
                <h3>{{ blog.title }}</h3>
                <p><strong>Dátum:</strong> {{ blog.updated_at }}, <strong>Szerző: </strong>{{ blog.user_name  }} </p>
                <p>{{ blog.description }}</p>
                <hr>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import blogservices from '../../services/blogservices';

const blogs = ref();

blogservices.getAllBlog()
    .then(resp => {
        // console.log(resp.data);
        blogs.value = resp.data;
    })
    

</script>

<style lang="scss" scoped>

</style>