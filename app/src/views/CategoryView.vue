<script setup lang="ts">
import { useRouter } from 'vue-router';
import { type Style } from '@/models/StylesPerCategory';
import useFetchDataOnRouteChange from '@/hooks/useFetchData';

const router = useRouter();
const { data: stylesPerCategory } = useFetchDataOnRouteChange<Style[]>('getStylesPerCategory');

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
