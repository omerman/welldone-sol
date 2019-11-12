import React from "react";
import { useHistory } from "react-router";
import { useObserver, useLocalStore } from "mobx-react";
import { useStore } from "../../common/provider/store";
import { LocationEditor } from "..";
import { LocationEditorStore } from "../store";

export const ConnectAddLocation: React.FC = () => {
  const store = useStore();
  const history = useHistory();

  const localStore = useLocalStore(
    () => (
      new LocationEditorStore(
        store,
        history,
      )
    )
  );

  return useObserver(
    () => (
      <LocationEditor {...localStore.props} />
    )
  );
}