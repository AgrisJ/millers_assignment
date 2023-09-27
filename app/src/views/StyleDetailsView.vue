<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import PictureBtn from '@/components/PictureBtn.vue';
import SizeButtons from '@/components/SizeButtons.vue';

const store = useStore();
let selectedStyle = computed(() => store.state.style?.[0]);
let pickedColor = ref('');

watch(
  selectedStyle,
  (newVal) => {
    if (newVal && newVal.Colors && newVal.Colors.length > 0) {
      pickedColor.value = newVal.Colors[0].color_name;
    }
  },
  { immediate: true },
);

function handleUpdatePicked(event) {
  pickedColor.value = event;
}
</script>

<template>
  <main :class="['container']">
    <div :class="['grid-cols-4 gap-4 flex justify-center relative bg-white']">
      <PictureBtn
        v-for="(color, index) in selectedStyle?.Colors"
        :key="index"
        :color="color.color_name"
        :picked="pickedColor"
        @update:picked="handleUpdatePicked"
      />
    </div>
    <div :class="['grid-cols-4 gap-4 flex justify-center relative bg-white']">
      <SizeButtons :pickedColor="pickedColor" />
    </div>
  </main>
</template>

<style scoped></style>
