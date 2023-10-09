interface SortableSize {
  size_name: string;
  Availabilities?: {
    volume: number;
  }[];
}

export const sorted = (sizesData: SortableSize[]) => {
  const sizeNameOrder = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  let sortFn;

  // Check if most size_names are numeric
  const numericCount = sizesData.reduce((count, item) => {
    return count + (!isNaN(Number(item.size_name)) ? 1 : 0);
  }, 0);
  const mostAreNumeric = numericCount > sizesData.length / 2;

  if (mostAreNumeric) {
    sortFn = (a: SortableSize, b: SortableSize) => Number(a.size_name) - Number(b.size_name);
  } else {
    const sizeNameOrderMap = new Map(sizeNameOrder.map((name, index) => [name, index]));
    sortFn = (a: SortableSize, b: SortableSize) => {
      return (sizeNameOrderMap.get(a.size_name) || 0) - (sizeNameOrderMap.get(b.size_name) || 0);
    };
  }

  return sizesData.sort(sortFn);
};
