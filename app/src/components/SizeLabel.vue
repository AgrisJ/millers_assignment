<script setup lang="ts">
import { defineProps } from 'vue';
import EnvelopeIcon from './EnvelopeIcon.vue';
defineProps({
  size: {
    type: String,
    required: true,
  },
  volume: {
    type: Number,
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
      data-content="Notify when available"
      :class="[
        'w-16 h-16 inline-flex items-center p-2 justify-center text-center bg-white cursor-pointer select-none relative',
        volume > 0 ? 'border-transitions' : 'border border-gray-100 text-gray-200 tooltip z-10',
        picked === size ? 'border-black' : ' border-gray-300',
      ]"
    >
      <input
        type="radio"
        class="form-radio hidden"
        :value="size"
        :checked="picked === size && volume > 0"
        @change="$emit('update:picked', ($event.target as HTMLInputElement).value)"
      />
      <EnvelopeIcon v-if="volume === 0" />
      <span class="font-semi-bold uppercase">{{ size }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.border-transitions {
  border-style: solid;
  border-width: 1px;
  transition: border 0.1s ease;
}

.border-transitions:hover {
  border-color: black;
}
.border-transitions:not(:hover) {
  transition: border 0.5s ease;
}

.tooltip::after {
  content: attr(data-content);
  border: 1px solid black;
  position: absolute;
  top: 65%;
  left: 70%;
  padding: 0.5rem 0.25rem;
  background-color: white;
  font-size: 0.852rem;
  font-weight: 100;
  color: black;
  width: max-content;
  visibility: hidden;
}
.tooltip:hover::after {
  visibility: visible;
}
</style>
