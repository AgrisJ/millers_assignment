<script setup lang="ts">
import { ref, watch } from 'vue';
import ColorPickerButton from '@/components/ColorPickerButton.vue';
import SizeAndSubsizeSelector from '@/components/SizeSelector/SizeAndSubsizeSelector.vue';
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
  <div :class="['grid-cols-4 flex flex-wrap gap-1 sm:mx-52 mx-2  justify-start relativ mb-8']">
    <ColorPickerButton
      v-for="(color, index) in selectedStyle?.Colors"
      :key="index"
      :color="color.color_name"
      :picked="pickedColor"
      @update:picked="handleUpdatePicked"
    />
  </div>
  <div :class="['grid-cols-4 gap-4 flex flex-col sm:mx-52 mx-2 relativ']">
    <SizeAndSubsizeSelector :pickedColor="pickedColor" />
  </div>
</template>

<style scoped></style>
