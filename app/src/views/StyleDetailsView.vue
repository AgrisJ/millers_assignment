<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import ColorPickerButton from '@/components/ColorPickerButton.vue';
import SizeAndSubsizeSelector from '@/components/SizeSelector/SizeAndSubsizeSelector.vue';
import useFetchDataOnRouteChange from '@/hooks/useFetchData';
import { type Style, type Image, type Color } from '@/models/StylesPerCategory';

const { data: selectedStyle } = useFetchDataOnRouteChange<Style>('getStyle');

let pickedColor = ref<Color[]>([]);

function containsColor(imgUrl: string) {
  const colorString = '_color_';
  return imgUrl.includes(colorString);
}

watch(
  selectedStyle,
  (newStyleValue) => {
    const colors = newStyleValue?.Colors;
    if (colors && colors.length > 0) {
      pickedColor.value = [colors[0]];
    }
  },
  { immediate: true },
);

function colorImages(color: Color) {
  return computed(() => color?.Images?.filter((image: Image) => containsColor(image?.image_url)));
}

function handleUpdatePicked(event: Color) {
  pickedColor.value = [event];
}
</script>

<template>
  <div :class="['flex my-4 mx-4']">
    <div :class="['flex']">
      <div v-for="(color, colorIndex) in selectedStyle?.Colors" :key="'color-' + colorIndex" :class="['flex flex-col']">
        <picture :class="['flex flex-col items-center justify-center']" v-for="(image, imageIndex) in color?.Images" :key="'image-' + imageIndex">
          <img
            v-if="!containsColor(image?.image_url) && pickedColor[0]?.id === color?.id"
            :class="['flex flex-col items-center justify-center w-[410px] aspect-[410/547]']"
            :src="image.image_url"
            alt="Fashion Styles"
          />
        </picture>
      </div>
    </div>
    <div :class="['flex flex-col ml-3']">
      <h1 :class="['text-sm font-normal mb-2']">{{ selectedStyle?.style_name }}</h1>
      <p :class="['text-xs font-bold mb-3']">399.95 KR</p>
      <h2 :class="['text-xs font-light mb-3']">{{ pickedColor[0]?.color_name }}</h2>
      <div :class="['flex mb-5']">
        <div v-for="(color, colorIndex) in selectedStyle?.Colors" :key="'color-' + colorIndex" :class="['flex flex-col justify-start ml-1']">
          <ColorPickerButton
            v-for="(colorImage, colorImageIndex) in colorImages(color).value"
            :key="'image-' + colorImageIndex"
            :color="color"
            :picked="pickedColor[0]"
            :imageUrl="colorImage?.image_url"
            @update:picked="handleUpdatePicked"
          />
        </div>
      </div>
      <div :class="['grid-cols-4 gap-4 flex flex-col relativ']">
        <SizeAndSubsizeSelector :pickedColor="pickedColor[0]" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
