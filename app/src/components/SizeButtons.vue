<script setup lang="ts">
import { ref } from 'vue';
const picked = ref(null);
const sizes = ref(['XS', 'S', 'M', 'L', 'XL', 'XXL']);
</script>

<template>
  <div v-for="(size, index) in sizes" :key="index" class="my-2">
    <label
      :class="[
        'w-16 h-16 inline-flex items-center bg-white p-2 justify-center text-center cursor-pointer',
        picked === size ? 'border border-black' : 'radio-button',
      ]"
    >
      <input type="radio" class="form-radio hidden" :value="size" v-model="picked" />
      <span class="font-semi-bold uppercase">{{ size }}</span>
    </label>
  </div>
</template>

<style scoped>
.radio-button {
  /* Initial color */
  border: solid 1px rgb(185, 185, 185);

  /* Transition effect for border property */
  transition: border 0.1s ease;
}

.radio-button:hover {
  border: solid 1px black;
}
.radio-button:not(:hover) {
  transition: border 0.5s ease;
}
</style>
