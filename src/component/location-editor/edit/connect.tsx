import React from "react";
import { useParams, useHistory } from "react-router";
import { useObserver, useLocalStore } from "mobx-react";
import { useStore } from "../../common/provider/store";
import { LocationEditor } from "..";
import { LocationEditorStore } from "../store";

export const ConnectEditLocation: React.FC = () => {
  const store = useStore();
  const { locationId } = useParams<{ locationId: string }>();
  const history = useHistory();

  const localStore = useLocalStore(
    () => (
      new LocationEditorStore(
        store,
        history,
        store.locationsManager.findLocation(locationId),
      )
    )
  );

  return useObserver(
    () => (
      <LocationEditor {...localStore.props} />
    )
  );
}