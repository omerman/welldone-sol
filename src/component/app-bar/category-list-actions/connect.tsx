import React from "react";
import { useObserver } from "mobx-react";
import { CategoryListActions } from ".";
import { useStore } from "../../common/provider/store";

export const ConnectCategoryListActions: React.FC = () => {
  const store = useStore();

  return useObserver(
    () => (
      <CategoryListActions
        selectedCategoryId={store.categoriesManager.selectedId}
        onCreateCategory={() => {
          console.log('Create Category');
        }}
        onEditCategory={() => {
          console.log('Edit Category');
        }}
        onViewCategory={() => {
          console.log('View Category');
        }}
        onDeleteCategory={() => {
          console.log('Delete Category');
        }}
      />
    )
  );
}