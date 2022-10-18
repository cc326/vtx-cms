import PageContent from '@/components/page-content/src/page-content.vue';
import { ref } from 'vue';

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();

  function handleResetClick() {
    pageContentRef.value?.getPageData();
  }
  function handleQueryClick(value: any) {
    pageContentRef.value?.getPageData(value);
  }
  return { pageContentRef, handleResetClick, handleQueryClick };
}
