<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import apiService from '@/services/apiService';
import { type Category } from '@/models/Category';
import Modal from './Modal.vue';

let categories = ref<Category[]>([]);

const router = useRouter();

onMounted(async () => {
  try {
    categories.value = await apiService.getCategories();
  } catch (error) {
    console.error(`Failed to fetch categories: ${error}`);
  }
});

const handleClickCategory = (category: Category) => {
  router.push(`/category/${category.id}`);
};

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<template>
  <header :class="['sticky top-0 bg-fashion-primary shadow-lg']">
    <nav :class="['container flex flex-col sm:flex-row items-center gap-4 text-white py-6 pr-0']">
      <RouterLink :to="{ name: 'home' }">
        <div :class="['flex items-center gap-3']">
          <p :class="['text-2xl text-center']">The Fashion Styles Component</p>
        </div>
      </RouterLink>

      <div :class="['flex gap-3 flex-1 justify-end']">
        <ul :class="['flex align-middle gap-3']">
          <li
            v-for="category in categories"
            :key="category.id"
            :class="['cursor-pointer hover:text-gray-400 active:text-gray-700']"
            @click="handleClickCategory(category)"
          >
            {{ category.category_name }}
          </li>
        </ul>
        <i :class="['fa-solid fa-circle-info text-xl cursor-pointer hover:text-fashion-secondary duration-150 ml-4']" @click="toggleModal"></i>
      </div>
      <Modal :modalActive="modalActive" @close-modal="toggleModal">
        <div :class="['text-black']">
          <h1 :class="['text-2xl text-center mb-1']">The Fashion Styles Component</h1>
          <p :class="['mb-4']">This is a showcase...</p>
          <h1 :class="['text-2xl']">What and Why</h1>
          <ol :class="['list-decimal list-inside mb-4']">
            <li>This</li>
            <li>That</li>
            <li>Another</li>
          </ol>
        </div>
      </Modal>
    </nav>
  </header>
</template>
