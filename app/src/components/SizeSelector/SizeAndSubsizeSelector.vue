<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import SizeLabel from './SizeLabel.vue';
import { type Style } from '@/models/StylesPerCategory';
import { sizes as sizesData, subsizes as subsizesData } from '@/services/demoData';
import { sorted } from './utils/sortSizes';
import useFetchDataOnRouteChange from '@/hooks/useFetchData';

const { data: selectedStyle } = useFetchDataOnRouteChange<Style>('getStyle');

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
    Subsizes: subsizesData,
  })),
);

const getSelectedColor = () => selectedStyle.value?.Colors?.find((color) => color.color_name === props.pickedColor);
const getSelectedSize = () => sizesFetched.value?.find((size) => size?.size_name === pickedSize?.value);

const sizesFetched = computed(() => {
  const selectedColor = getSelectedColor();
  return selectedColor ? selectedColor.Sizes : [];
});

const subsizesFetched = computed(() => {
  const selectedSize = getSelectedSize();
  return selectedSize ? selectedSize.Subsizes : [];
});

const sizesToUse = computed(() => (props.isDemo ? dummySizes.value : sizesFetched.value));
const subsizesToUse = computed(() => (props.isDemo ? dummySizes.value?.[0]?.Subsizes : subsizesFetched.value));

const pickedSize = ref(sizesToUse.value?.[0]?.size_name);
const pickedSubsize = ref('');

watch(
  sizesToUse,
  (newSizes) => {
    if (newSizes?.length > 0) {
      pickedSize.value = newSizes[0].size_name;
    }
  },
  { immediate: true },
);
</script>

<template>
  <div>
    <p :class="['font-Roboto font-thin uppercase']">Choose size</p>
    <div :class="['flex flex-wrap gap-1']">
      <div v-for="(sizeObj, index) in sorted(sizesToUse)" :key="index" :class="['my-1']">
        <SizeLabel
          :size="sizeObj.size_name"
          :picked="pickedSize"
          @update:picked="pickedSize = $event"
          :volume="sizeObj?.Availabilities?.[0]?.volume || 0"
        />
      </div>
    </div>
    <p v-if="subsizesToUse?.length" :class="['font-Roboto font-thin uppercase']">Choose length</p>
    <div :class="['flex flex-wrap gap-1']">
      <div v-for="(subsizesObj, index) in subsizesToUse" :key="index" class="my-2">
        <SizeLabel
          :size="subsizesObj.size_name"
          :picked="pickedSubsize"
          @update:picked="pickedSubsize = $event"
          :volume="subsizesObj?.Availabilities?.[0]?.volume || 0"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>