<template>
  <header class="sticky top-0 bg-fashion-primary shadow-lg">
    <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3">
          <svg class="w-8 h-8 text-white text-2xl" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2z" />
          </svg>
          <p class="text-2xl">The Fashion Styles Component</p>
        </div>
      </RouterLink>

      <div class="flex gap-3 flex-1 justify-end">
        <svg class="w-8 h-8 text-white text-xl hover:text-fashion-secondary duration-150 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
