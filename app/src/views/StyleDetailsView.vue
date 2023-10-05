<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import PictureBtn from '@/components/PictureBtn.vue';
import SizeButtons from '@/components/SizeButtons.vue';
import { type Style } from '@/models/StylesPerCategory';
import apiService from '@/services/apiService';

const router = useRouter();
const styleId = ref(router.currentRoute.value.params.id);
let selectedStyle = ref<Style>();
let pickedColor = ref('');

watch(
  selectedStyle,
  (newVal) => {
    if (newVal?.Colors && newVal?.Colors?.length > 0) {
      pickedColor.value = newVal?.Colors[0].color_name;
    }
  },
  { immediate: true },
);

onMounted(async () => {
  if (!isNaN(Number(styleId.value))) {
    try {
      selectedStyle.value = await apiService.getStyle(Number(styleId.value));
    } catch (error) {
      console.error(`Failed to fetch categories: ${error}`);
    }
  }
});

watch(
  () => router.currentRoute.value,
  async (newRoute) => {
    styleId.value = newRoute.params.id;
  },
);

watch(
  styleId,
  async (newStyleId) => {
    if (!isNaN(Number(newStyleId))) {
      try {
        selectedStyle.value = await apiService.getStyle(Number(newStyleId));
      } catch (error) {
        console.error(`Failed to fetch Style: ${error}`);
      }
    }
  },
  { immediate: true },
);

function handleUpdatePicked(event: string) {
  pickedColor.value = event;
}
</script>

<template>
  <main :class="['container']">
    <div :class="['grid-cols-4 flex flex-wrap gap-1 justify-center relative bg-white']">
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
