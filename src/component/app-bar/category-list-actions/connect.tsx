import React from "react";
import { useObserver } from "mobx-react";
import { CategoryListActions } from ".";
import { useStore } from "../../common/provider/store";
import { useHistory } from "react-router";

export const ConnectCategoryListActions: React.FC = () => {
  const store = useStore();
  const history = useHistory();

  return useObserver(
    () => (
      <CategoryListActions
        selectedCategoryId={store.categoriesManager.selectedId}
        onCreateCategory={() => {
          console.log('Create Category');
        }}
        onEditCategory={() => {
          console.log('Routing to edit category');
          history.push(`/categories/${store.categoriesManager.selectedId}`);
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