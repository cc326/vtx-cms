import PageDialog from '@/components/page-dialog';
import { ref } from 'vue';

type CallBackFn = (item?: any) => void;

export function useDialog(newCb?: CallBackFn, editCb?: CallBackFn) {
  const pageDialogRef = ref<InstanceType<typeof PageDialog>>();
  const defaultInfo = ref({});
  function handleEditClick(item: any) {
    defaultInfo.value = { ...item };
    if (pageDialogRef.value) pageDialogRef.value.DialogVisible = true;
    editCb && editCb(item);
  }
  function handleNewClick() {
    defaultInfo.value = {};
    if (pageDialogRef.value) pageDialogRef.value.DialogVisible = true;
    newCb && newCb();
  }

  return { handleEditClick, handleNewClick, pageDialogRef, defaultInfo };
}
