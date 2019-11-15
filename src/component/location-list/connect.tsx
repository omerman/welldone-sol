import React, { useEffect } from "react";
import { useObserver, useLocalStore } from "mobx-react";
import { useStore } from "../common/provider/store";
import { LocationList } from ".";
import { LocationListStore } from "./store";

export const ConnectLocationList: React.FC = () => {
  const store = useStore();

  useEffect(
    function clearSelectedLocationUpponUnmount() {
      return () => store.locationsManager.clearSelected();
    },
    [store.locationsManager],
  );

  const localStore = useLocalStore(() => new LocationListStore(store));

  return useObserver(
    () => (
      <LocationList
        categoryList={localStore.categoryList}
        onSelectLocation={localStore.onSelectLocation}
        selectedLocationId={localStore.selectedLocationId}
        isSortedAlpha={localStore.isSortedAlpha}
        onToggleSortedAlpha={localStore.toggleSortedAlpha}
        categoriesFilter={{
          filters: localStore.categoriesFilter,
          onToggleFilter: localStore.toggleCategoryFilterItem,
        }}
      />
    )
  );
}