<script setup lang="ts">
import { ref } from 'vue';
import SizeLabel from './SizeLabel.vue';

const sizes = ref(['XS', 'S', 'M', 'L', 'XL', 'XXL']);
const lenghts = ref(['30', '32', '33', '34']);
const pickedSize = ref(sizes.value[0]);
const pickedLength = ref(null);
</script>

<template>
  <div class="">
    <div class="flex gap-4">
      <div v-for="(size, index) in sizes" :key="index" class="my-2">
        <SizeLabel :size="size" :picked="pickedSize" @update:picked="pickedSize = $event" />
      </div>
    </div>
    <div class="flex gap-4">
      <div v-for="(lenght, index) in lenghts" :key="index" class="my-2">
        <SizeLabel :size="lenght" :picked="pickedLength" @update:picked="pickedLength = $event" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
