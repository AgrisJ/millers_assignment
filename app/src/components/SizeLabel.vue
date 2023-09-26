<script setup lang="ts">
import { defineProps } from 'vue';
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

      <svg
        v-if="volume === 0"
        class="w-6 h-6 text-gray-200 absolute top-1 right-0 hover-fill-black"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="10"
      >
        <path
          d="M1 0h14c.5527 0 1 .372708 1 .833333V9.16667C16 9.62729 15.5527 10 15 10H1c-.55275 0-1-.37271-1-.83333V.833333C0 .372708.44725 0 1 0Zm14 .416667H1c-.276 0-.5.186666-.5.416666v.514377L8 5.99042l7.5-4.64271V.833333c0-.23-.224-.416666-.5-.416666ZM1 9.58333h14c.276 0 .5-.18666.5-.41666v-.585l-4.646-2.78771c-.112-.06708-.1375-.19729-.057-.29083.0805-.09313.2365-.11438.349-.0475L15.5 8.06854V1.86688L8.14925 6.41729c-.0445.0275-.09675.04104-.14925.04104-.0525 0-.10475-.01354-.14925-.04104L.5 1.86688v6.20166l4.354-2.6125c.112-.06708.2685-.04604.349.0475.0805.09334.05525.22354-.057.29083L.5 8.58167v.585c0 .23.224.41666.5.41666Z"
          fill="#E5E7EB"
        />
      </svg>

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

.hover-fill-black:hover path {
  fill: black !important;
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
