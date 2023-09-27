<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import apiService from '../services/apiService';

let categories = ref([]);

onMounted(async () => {
  try {
    categories.value = await apiService.getCategories();
  } catch (error) {
    console.error(`Failed to fetch categories: ${error}`);
  }
});
</script>

<template>
  <header :class="['sticky top-0 bg-fashion-primary shadow-lg']">
    <nav :class="['container flex flex-col sm:flex-row items-center gap-4 text-white py-6']">
      <RouterLink :to="{ name: 'home' }">
        <div :class="['flex items-center gap-3']">
          <p :class="['text-2xl']">The Fashion Styles Component</p>
        </div>
      </RouterLink>

      <div :class="['flex gap-3 flex-1 justify-end']">
        <ul :class="['flex gap-3']">
          <li v-for="category in categories" :key="category.id" :class="['cursor-pointer hover:text-gray-400 active:text-gray-700']">
            {{ category.category_name }}
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
