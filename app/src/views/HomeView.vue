<script setup lang="ts">
import SizeButtons from '@/components/SizeButtons.vue';
</script>

<template>
  <main :class="['container']">
    <div :class="['grid-cols-4 gap-4 flex justify-center relative bg-white']">
      <SizeButtons />
    </div>
  </main>
</template>
