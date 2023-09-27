<script setup lang="ts">
import { ref } from 'vue';
import PictureBtn from '@/components/PictureBtn.vue';
import SizeButtons from '@/components/SizeButtons.vue';

const pickedColor = ref(null);
</script>

<template>
  <main :class="['container p-0']">
    <div :class="['grid-cols-4 gap-4 flex flex-col items-center relative bg-white']">
      <p :class="['py-2']">Demo color button</p>
      <PictureBtn :picked="pickedColor" @update:picked="pickedColor = $event" />
    </div>
    <div :class="['grid-cols-4 px-4 gap-4 flex flex-col items-center relative bg-white']">
      <p :class="['py-2']">Sizes buttons with demo data</p>
      <SizeButtons :isDemo="true" />
    </div>
  </main>
</template>
