import React from "react";
import { useParams, useHistory } from "react-router";
import { useObserver, useLocalStore } from "mobx-react";
import { useStore } from "../../common/provider/store";
import { CategoryEditor } from "..";
import { CategoryEditorStore } from "../store";

export const ConnectEditCategory: React.FC = () => {
  const store = useStore();
  const { categoryId } = useParams<{ categoryId: string }>();
  const history = useHistory();

  const localStore = useLocalStore(
    () => (
      new CategoryEditorStore(
        store,
        history,
        store.categoriesManager.findCategory(categoryId),
      )
    )
  );

  return useObserver(
    () => (
      <CategoryEditor {...localStore.props} />
    )
  );
}