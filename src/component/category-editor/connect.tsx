import React, { useEffect } from "react";
import { useObserver, useLocalStore } from "mobx-react";
import { useStore } from "../common/provider/store";
import { CategoryEditor } from ".";
import { useParams, useHistory } from "react-router";

export const ConnectCategoryEditor: React.FC = () => {
  const store = useStore();
  const { categoryId } = useParams<{ categoryId: string }>();
  const history = useHistory();

  const localStore = useLocalStore(
    () => ({
      category: store.categoriesManager.cloneCategory(categoryId),
      get name() {
        return {
          value: this.category.name,
          onChange: this.category.setName,
        };
      },
      onSave() {
        store.categoriesManager.updateCategory(
          categoryId,
          this.category.name,
        );

        history.push('/categories');
      }
    })
  );

  return useObserver(
    () => (
      <CategoryEditor
        name={localStore.name}
        onSave={localStore.onSave}
      />
    )
  );
}