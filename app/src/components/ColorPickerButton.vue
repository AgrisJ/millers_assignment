<script setup lang="ts">
import { defineProps } from 'vue';
import { type Color } from '@/models/StylesPerCategory';

defineProps({
  picked: {
    type: Object as () => Color,
    required: true,
  },
  color: {
    type: Object as () => Color,
    default: '',
  },
  imageUrl: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <button
    :class="[
      'flex flex-col items-center justify-cente hover:border hover:border-black min-w-fit ',
      picked.id === color.id ? 'border border-black' : 'border border-transparent',
    ]"
    @click.prevent="$emit('update:picked', color)"
  >
    <picture :class="['flex flex-col items-center justify-center']">
      <img :class="['flex flex-col items-center justify-center']" :src="imageUrl" alt="Fashion Styles" />
    </picture>
  </button>
</template>

<style scoped></style>
