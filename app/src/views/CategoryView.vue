<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import apiService from '@/services/apiService';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

let styles = ref([]);
let styleIds = ref([]);
let stylesPerCategory = ref([]);

const store = useStore();
const router = useRouter();
let selectedCategory = computed(() => store.state.category);

watch(
  selectedCategory,
  async (newCategory) => {
    try {
      stylesPerCategory.value = await apiService.getStyle(newCategory?.id);
    } catch (error) {
      console.error(`Failed to fetch categories: ${error}`);
    }
  },
  { immediate: true },
);

onMounted(async () => {
  try {
    styles.value = await apiService.getStyles();
    styleIds.value = styles.value.map((style) => style.id);
  } catch (error) {
    console.error(`Failed to fetch categories: ${error}`);
  }
});

const setStyle = (style) => {
  store.dispatch('setStyle', style);
};

const handleStyleClick = (style) => {
  setStyle(style);
  router.push('/style');
};
</script>

<template>
  <main :class="['container']">
    <p :class="['p-1 font-thin text-white text-center bg-fashion-secondary']">Selected Category: {{ selectedCategory?.category_name }}</p>

    <div :class="['grid-cols-4 gap-4 flex justify-center relative bg-white']">
      <ul :class="['flex gap-3']">
        <li
          v-for="style in stylesPerCategory"
          :key="style.id"
          @click="handleStyleClick(stylesPerCategory)"
          :class="['cursor-pointer hover:text-gray-400 active:text-gray-700']"
        >
          {{ style.style_name }}
          <ul :class="['flex gap-3']">
            <li v-for="color in style.Colors" :key="color.id" :class="['text-gray-500']">
              {{ color.color_name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div :class="['grid-cols-4 gap-4 flex justify-center relative bg-white']"> </div>
  </main>
</template>

<style scoped></style>
