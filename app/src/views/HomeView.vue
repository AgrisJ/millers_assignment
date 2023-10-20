<script setup lang="ts">
import { ref } from 'vue';
import ColorPickerButton from '@/components/ColorPickerButton.vue';
import SizeAndSubsizeSelector from '@/components/SizeSelector/SizeAndSubsizeSelector.vue';
import { type Color } from '@/models/StylesPerCategory';

const pickedColor = ref<Color[]>([]);
</script>

<template>
  <div :class="['grid-cols-4 gap-4 flex flex-col items-center relative']">
    <p :class="['py-2']">Demo color button</p>
    <ColorPickerButton
      :picked="pickedColor[0]"
      @update:picked="pickedColor = $event"
      imageUrl="https://agrisj-showroom-bucket.s3.eu-central-1.amazonaws.com/fashion-styles/shirt_color_01.png"
    />
  </div>
  <div :class="['grid-cols-4 px-4 gap-4 flex flex-col items-center relative']">
    <p :class="['py-2']">Sizes buttons with demo data</p>
    <SizeAndSubsizeSelector :isDemo="true" />
  </div>
</template>
