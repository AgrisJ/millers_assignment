<template>
  <div :class="['flex flex-col min-h-screen font-Roboto']">
    <SiteNavigation />
    <main :class="['container p-0 border-solid border-gray-400 border rounded-2xl']">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import SiteNavigation from '@/components/SiteNavigation.vue';
</script>

<style lang="scss" scoped></style>
