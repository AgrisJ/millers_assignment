<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import SizeLabel from './SizeLabel.vue';
import { type Style } from '@/models/StylesPerCategory';
import { sizes as sizesData, lengths as lengthsData } from '@/services/demoData';
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
    Children: lengthsData,
  })),
);

const getSelectedColor = () => selectedStyle.value?.Colors?.find((color) => color.color_name === props.pickedColor);
const getSelectedSize = () => sizesFetched.value.find((size) => size?.size_name === pickedSize?.value);

const sizesFetched = computed(() => {
  const selectedColor = getSelectedColor();
  return selectedColor ? selectedColor.Sizes : [];
});

const lengthsFetched = computed(() => {
  const selectedSize = getSelectedSize();
  return selectedSize ? selectedSize.Children : [];
});

const sizesToUse = computed(() => (props.isDemo ? dummySizes.value : sizesFetched.value));
const lengthsToUse = computed(() => (props.isDemo ? dummySizes.value?.[0]?.Children : lengthsFetched.value));

const pickedSize = ref(sizesToUse.value?.[0]?.size_name);
const pickedLength = ref('');

watch(
  sizesToUse,
  (newSizes) => {
    if (newSizes.length > 0) {
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
