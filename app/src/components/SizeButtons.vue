<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
import SizeLabel from './SizeLabel.vue';
import apiService from '@/services/apiService';

let stylesPerCategory = ref([]);
let selectedCategory = computed(() => store.state.category);
let selectedStyle = computed(() => store.state.style?.[0]);

watch(
  selectedCategory,
  async (newCategory) => {
    try {
      stylesPerCategory.value = await apiService.getStyle(newCategory?.id);
    } catch (error) {
      console.error(`Failed to fetch categories: ${error}`);
    }
  },
  { immediate: true },
);

const props = defineProps({
  pickedColor: {
    type: String,
    required: false,
  },
  isDemo: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const sizes = ref([
  {
    size_name: 'XS',
    Availabilities: [{ volume: 5 }],
  },
  {
    size_name: 'S',
    Availabilities: [{ volume: 10 }],
  },
  {
    size_name: 'M',
    Availabilities: [{ volume: 15 }],
  },
  {
    size_name: 'L',
    Availabilities: [{ volume: 0 }],
  },
  {
    size_name: 'XL',
    Availabilities: [{ volume: 25 }],
  },
  {
    size_name: 'XXL',
    Availabilities: [{ volume: 30 }],
  },
]);
const sizesFetched = computed(() => {
  if (selectedStyle.value?.Colors) {
    const selectedColor = selectedStyle.value.Colors.find((color) => color.color_name === props.pickedColor);

    return selectedColor ? selectedColor.Sizes : [];
  }

  return [];
});

const lenghts = ref([
  {
    size_name: '30',
    Availabilities: [{ volume: 5 }],
  },
  {
    size_name: '32',
    Availabilities: [{ volume: 10 }],
  },
  {
    size_name: '34',
    Availabilities: [{ volume: 15 }],
  },
  {
    size_name: '36',
    Availabilities: [{ volume: 2 }],
  },
]);

const sizesToUse = computed(() => {
  return props.isDemo ? sizes?.value : sizesFetched?.value;
});
const lenghtsToUse = computed(() => {
  return props.isDemo ? lenghts?.value : lengthsFetched?.value;
});

const pickedSize = ref(sizesToUse?.[0]?.size_name);
const pickedLength = ref('');

const lengthsFetched = computed(() => {
  if (sizesFetched) {
    const selectedSize = sizesFetched.value.find((size) => size?.size_name === pickedSize?.value);
    return selectedSize ? selectedSize?.value?.Lengths : [];
  }

  return [];
});
</script>

<template>
  <div>
    <p :class="['font-Roboto font-thin uppercase']">Choose size</p>
    <div :class="['flex gap-1']">
      <div v-for="(sizeObj, index) in sizesToUse" :key="index" :class="['my-1']">
        <SizeLabel
          :size="sizeObj.size_name"
          :picked="pickedSize"
          @update:picked="pickedSize = $event"
          :volume="sizeObj?.Availabilities?.[0]?.volume || 0"
        />
      </div>
    </div>
    <div :class="['flex gap-1']">
      <div v-for="(lenghtObj, index) in lenghtsToUse" :key="index" :class="['my-2']">
        <SizeLabel
          :size="lenghtObj.size_name"
          :picked="pickedLength"
          @update:picked="pickedLength = $event"
          :volume="lenghtObj?.Availabilities?.[0]?.volume || 0"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
