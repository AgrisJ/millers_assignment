import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import apiService from '@/services/apiService';

type ApiService = typeof apiService;

export default function useFetchDataOnRouteChange<T>(fetchDataMethod: keyof ApiService) {
  const router = useRouter();
  const id = ref(router.currentRoute.value.params.id);
  let data = ref<T | null>(null);

  const fetchData = async (newId: string) => {
    if (!isNaN(Number(newId))) {
      try {
        data.value = await apiService[fetchDataMethod](Number(newId));
      } catch (error) {
        console.error(`Failed to fetch data: ${error}`);
      }
    }
  };

  onMounted(async () => {
    await fetchData(id.value as string);
  });

  watch(
    () => router.currentRoute.value,
    async (newRoute) => {
      id.value = newRoute.params.id;
    },
  );

  watch(
    id,
    async (newId) => {
      await fetchData(newId as string);
    },
    { immediate: true },
  );

  return {
    id,
    data,
  };
}
