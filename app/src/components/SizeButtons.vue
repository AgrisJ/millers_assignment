<script setup lang="ts">
import { ref } from 'vue';
import SizeLabel from './SizeLabel.vue';

const sizes = ref([
  { size: 'XS', volume: 5 },
  { size: 'S', volume: 10 },
  { size: 'M', volume: 15 },
  { size: 'L', volume: 0 },
  { size: 'XL', volume: 25 },
  { size: 'XXL', volume: 30 },
]);
const lenghts = ref([
  { size: '30', volume: 5 },
  { size: '32', volume: 10 },
  { size: '34', volume: 15 },
  { size: '36', volume: 2 },
]);
const pickedSize = ref(sizes.value[0].size);
const pickedLength = ref(null);
</script>

<template>
  <div class="">
    <div class="flex gap-4">
      <div v-for="(sizeObj, index) in sizes" :key="index" class="my-2">
        <SizeLabel :size="sizeObj.size" :picked="pickedSize" @update:picked="pickedSize = $event" :volume="sizeObj.volume" />
      </div>
    </div>
    <div class="flex gap-4">
      <div v-for="(lenghtObj, index) in lenghts" :key="index" class="my-2">
        <SizeLabel :size="lenghtObj.size" :picked="pickedLength" @update:picked="pickedLength = $event" :volume="lenghtObj.volume" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
