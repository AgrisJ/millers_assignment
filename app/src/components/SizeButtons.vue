<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import SizeLabel from './SizeLabel.vue';
import apiService from '@/services/apiService';
import { type StylePerCategory } from '@/models/StylesPerCategory';
import { sizes as sizesData, lengths as lengthsData } from '@/services/demoData';

const store = useStore();
let stylesPerCategory = ref<StylePerCategory[]>([]);
let selectedCategory = computed(() => store.state.category);
let selectedStyle = computed(() => (store.state.style as StylePerCategory[])?.[0]);

watch(
  selectedCategory,
  async (newCategory) => {
    if (!newCategory?.id) return;
    try {
      const response = await apiService.getStyle(newCategory.id);
      stylesPerCategory.value = response?.data || [];
    } catch (error) {
      console.error(`Failed to fetch categories: ${error}`);
    }
  },
  { immediate: true },
);

const props = defineProps({
  pickedColor: {
    type: String,
  },
  isDemo: {
    type: Boolean,
  },
});

const dummySizes = ref(
  sizesData.map((size) => ({
    ...size,
    Children: lengthsData,
  })),
);

const sizesFetched = computed(() => {
  const selectedColor = selectedStyle.value?.Colors?.find((color) => color.color_name === props.pickedColor);
  return selectedColor ? selectedColor.Sizes : [];
});

const lengthsFetched = computed(() => {
  const selectedSize = sizesFetched.value.find((size) => size?.size_name === pickedSize?.value);
  return selectedSize ? selectedSize.Children : [];
});

const sizesToUse = computed(() => (props.isDemo ? dummySizes.value : sizesFetched.value));
const lengthsToUse = computed(() => (props.isDemo ? dummySizes.value?.[0]?.Children : lengthsFetched.value));

const pickedSize = ref(sizesToUse.value?.[0]?.size_name);
const pickedLength = ref('');
</script>

<template>
  <div>
    <p :class="['font-Roboto font-thin uppercase']">Choose size</p>
    <div :class="['flex flex-wrap gap-1']">
      <div v-for="(sizeObj, index) in sizesToUse" :key="index" :class="['my-1']">
        <SizeLabel
          :size="sizeObj.size_name"
          :picked="pickedSize"
          @update:picked="pickedSize = $event"
          :volume="sizeObj?.Availabilities?.[0]?.volume || 0"
        />
      </div>
    </div>
    <div :class="['flex flex-wrap gap-1']">
      <div v-for="(lengthObj, index) in lengthsToUse" :key="index" class="my-2">
        <SizeLabel
          :size="lengthObj.size_name"
          :picked="pickedLength"
          @update:picked="pickedLength = $event"
          :volume="lengthObj?.Availabilities?.[0]?.volume || 0"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
