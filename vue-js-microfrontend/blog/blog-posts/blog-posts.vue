<script setup lang="ts">
import { useGetPosts } from "@lakinduhewa/vue-js-microfrontend.blog.use-get-posts";
import BlogPost from "@lakinduhewa/vue-js-microfrontend.blog.blog-post";

const blogPosts = useGetPosts();
</script>

<template>
  <div>
    <BlogPost
      v-for="post in blogPosts"
      :key="post.title"
      :title="post.title"
      :description="post.description"
    />
  </div>
</template>

<style scoped></style>
