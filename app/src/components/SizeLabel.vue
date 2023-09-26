<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  size: {
    type: String,
    required: true,
  },
  picked: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="my-2">
    <label
      :class="[
        'w-16 h-16 inline-flex items-center bg-white p-2 justify-center text-center cursor-pointer',
        picked === size ? 'border border-black' : 'radio-button',
      ]"
    >
      <input
        type="radio"
        class="form-radio hidden"
        :value="size"
        :checked="picked === size"
        @change="$emit('update:picked', ($event.target as HTMLInputElement).value)"
      />
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
