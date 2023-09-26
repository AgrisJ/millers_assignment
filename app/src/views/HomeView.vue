<script setup lang="ts">
import { ref } from 'vue';
import PictureBtn from '@/components/PictureBtn.vue';
import SizeButtons from '@/components/SizeButtons.vue';

const pickedColor = ref(null);
</script>

<template>
  <main :class="['container']">
    <div :class="['grid-cols-4 gap-4 flex justify-center relative bg-white']">
      <PictureBtn :picked="pickedColor" @update:picked="pickedColor = $event" />
    </div>
    <div :class="['grid-cols-4 gap-4 flex justify-center relative bg-white']">
      <SizeButtons />
    </div>
  </main>
</template>
