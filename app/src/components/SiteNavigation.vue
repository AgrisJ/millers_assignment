<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import apiService from '../services/apiService';
import { useStore } from 'vuex';

let categories = ref([]);

const store = useStore();

onMounted(async () => {
  try {
    categories.value = await apiService.getCategories();
  } catch (error) {
    console.error(`Failed to fetch categories: ${error}`);
  }
});

const setCategory = (category) => {
  store.dispatch('setCategory', category.category_name);
};

let selectedCategory = computed(() => store.state.category);
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
          <li
            v-for="category in categories"
            :key="category.id"
            :class="['cursor-pointer hover:text-gray-400 active:text-gray-700']"
            @click="setCategory(category)"
          >
            {{ category.category_name }}
          </li>
        </ul>
      </div>
    </nav>
    <p :class="['p-1 font-thin text-white text-center bg-fashion-secondary']">Selected Category: {{ selectedCategory }}</p>
  </header>
</template>
