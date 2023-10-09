<script setup lang="ts">
import { ref } from 'vue';
import ColorPickerButton from '@/components/ColorPickerButton.vue';
import SizeAndSubsizeSelector from '@/components/SizeSelector/SizeAndSubsizeSelector.vue';

const pickedColor = ref('');
</script>

<template>
  <div :class="['grid-cols-4 gap-4 flex flex-col items-center relative']">
    <p :class="['py-2']">Demo color button</p>
    <ColorPickerButton :picked="pickedColor" @update:picked="pickedColor = $event" />
  </div>
  <div :class="['grid-cols-4 px-4 gap-4 flex flex-col items-center relative']">
    <p :class="['py-2']">Sizes buttons with demo data</p>
    <SizeAndSubsizeSelector :isDemo="true" />
  </div>
</template>
