<script setup lang="ts">
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.card {
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  margin-bottom: 10px;
}

h1 {
  font-size: 24px;
  margin-bottom: 8px;
}

p {
  font-size: 16px;
  color: #333;
}
</style>
