<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  picked: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <button
    :class="['flex flex-col items-center justify-center w-16 hover:border border-black w-15', picked === color ? 'border border-black w-15' : '']"
    @click.prevent="$emit('update:picked', color)"
  >
    <picture :class="['flex flex-col items-center justify-center']">
      <img
        :class="['flex flex-col items-center justify-center']"
        src="https://images.jackjones.com/12218240/4310468/001/jackjones-rddensfarvetcrewneckt-shirt-blaa.jpg?v=5400b28ddf8c9d658cb90b5c3e298acd&format=webp&width=120&quality=90&key=24-0-3"
        alt="Fashion Styles"
      />
    </picture>
    {{ color }}
  </button>
</template>

<style scoped></style>
