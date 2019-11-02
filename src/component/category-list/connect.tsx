import React, { useEffect } from "react";
import { useObserver } from "mobx-react";
import { CategoryList } from ".";
import { useStore } from "../common/provider/store";

export const ConnectCategoryList: React.FC = () => {
  const store = useStore();

  useEffect(
    function clearSelectedCategoryUpponUnmount() {
      return () => store.categoriesManager.clearSelected();
    },
    [store.categoriesManager],
  );

  return useObserver(
    () => (
      <CategoryList
        list={store.categoriesManager.get()}
        onSelectCategory={store.categoriesManager.select}
        selectedCategoryId={store.categoriesManager.selectedId}
      />
    )
  );
}