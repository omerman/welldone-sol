import React from "react";
import { useObserver } from "mobx-react";
import { useHistory } from "react-router";
import { useStore } from "../../../common/provider/store";
import { CategoryListActions } from ".";

export const ConnectCategoryListActions: React.FC = () => {
  const store = useStore();
  const history = useHistory();

  return useObserver(
    () => {
      return (
        <CategoryListActions
          selectedCategoryId={store.categoriesManager.selectedId}
          onCreateCategory={() => {
            console.log('Routing to add category');
            history.push('/categories/create');
          }}
          onEditCategory={() => {
            console.log('Routing to edit category');
            history.push(`/categories/edit/${store.categoriesManager.selectedId}`);
          }}
          onViewCategory={() => {
            console.log('Also routing to edit category');
            history.push(`/categories/edit/${store.categoriesManager.selectedId}`);
          }}
          onDeleteCategory={() => {
            console.log('Deleting Category');
            const { selectedId } = store.categoriesManager;

            if (selectedId) {
              store.categoriesManager.deleteCategory(selectedId);
            }
          }}
        />
      );
    }
  );
}