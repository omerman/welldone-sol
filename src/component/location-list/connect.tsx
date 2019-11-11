import React, { useEffect } from "react";
import { useObserver, useLocalStore } from "mobx-react";
import { LocationList } from ".";
import { useStore } from "../common/provider/store";

export const ConnectLocationList: React.FC = () => {
  const store = useStore();

  useEffect(
    function clearSelectedLocationUpponUnmount() {
      return () => store.locationsManager.clearSelected();
    },
    [store.locationsManager],
  );

  const localStore = useLocalStore(() => ({
    onSelectLocation(id: string) {
      store.locationsManager.select(id);
    },
    get list() {
      return store.locationsManager.get().map(location => ({
        id: location.id,
        name: location.name,
        categoryName: store.categoriesManager.findCategory(location.categoryId as string).name,
      }))
    },
    get selectedLocationId() {
      return store.locationsManager.selectedId;
    },
  }));

  return useObserver(
    () => (
      <LocationList
        list={localStore.list}
        onSelectLocation={localStore.onSelectLocation}
        selectedLocationId={localStore.selectedLocationId}
      />
    )
  );
}