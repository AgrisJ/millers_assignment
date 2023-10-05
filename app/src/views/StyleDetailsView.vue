<script setup lang="ts">
import { ref, watch } from 'vue';
import PictureBtn from '@/components/PictureBtn.vue';
import SizeButtons from '@/components/SizeButtons.vue';
import useFetchDataOnRouteChange from '@/hooks/useFetchData';
import { type Style } from '@/models/StylesPerCategory';

const { data: selectedStyle } = useFetchDataOnRouteChange<Style>('getStyle');

let pickedColor = ref('');

watch(
  selectedStyle,
  (newStyleValue) => {
    const colors = newStyleValue?.Colors;
    if (colors && colors.length > 0) {
      pickedColor.value = colors[0].color_name;
    }
  },
  { immediate: true },
);

function handleUpdatePicked(event: string) {
  pickedColor.value = event;
}
</script>

<template>
  <main :class="['container']">
    <div :class="['grid-cols-4 flex flex-wrap gap-1 justify-center relative bg-white']">
      <PictureBtn
        v-for="(color, index) in selectedStyle?.Colors"
        :key="index"
        :color="color.color_name"
        :picked="pickedColor"
        @update:picked="handleUpdatePicked"
      />
    </div>
    <div :class="['grid-cols-4 gap-4 flex justify-center relative bg-white']">
      <SizeButtons :pickedColor="pickedColor" />
    </div>
  </main>
</template>

<style scoped></style>
