<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import apiService from '@/services/apiService';
import { useRouter } from 'vue-router';
import { type Style } from '@/models/StylesPerCategory';

let stylesPerCategory = ref<Style[]>([]);

const router = useRouter();
const categoryId = ref(router.currentRoute.value.params.id);

onMounted(async () => {
  try {
    stylesPerCategory.value = await apiService.getStylesPerCategory(Number(categoryId.value));
  } catch (error) {
    console.error(`Failed to fetch categories: ${error}`);
  }
});

watch(
  () => router.currentRoute.value,
  async (newRoute) => {
    categoryId.value = newRoute.params.id;
  },
);

watch(
  categoryId,
  async (newCategoryId) => {
    try {
      stylesPerCategory.value = await apiService.getStylesPerCategory(Number(newCategoryId));
    } catch (error) {
      console.error(`Failed to fetch categories: ${error}`);
    }
  },
  { immediate: true },
);

const handleStyleClick = (style: Style) => {
  router.push(`/style/${style.id}`);
};
</script>

<template>
  <main :class="['container']">
    <div :class="['grid-cols-4 gap-4 flex justify-center relative bg-white']">
      <ul :class="['flex gap-3']">
        <li
          v-for="style in stylesPerCategory"
          :key="style.id"
          @click="handleStyleClick(style)"
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
