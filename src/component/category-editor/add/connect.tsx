import React from "react";
import { useHistory } from "react-router";
import { useObserver, useLocalStore } from "mobx-react";
import { useStore } from "../../common/provider/store";
import { CategoryEditor } from "..";
import { CategoryEditorStore } from "../store";

export const ConnectAddCategory: React.FC = () => {
  const store = useStore();
  const history = useHistory();

  const localStore = useLocalStore(
    () => (
      new CategoryEditorStore(
        store,
        history,
      )
    )
  );

  return useObserver(
    () => (
      <CategoryEditor {...localStore.props} />
    )
  );
}