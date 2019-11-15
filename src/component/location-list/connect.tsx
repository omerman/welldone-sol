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
    isSortedAlpha: false,
    onSelectLocation(id: string) {
      store.locationsManager.select(id);
    },
    get categoryList() {
      return (
        store.categoriesManager
          .get()
          .map(
            category => {
              const locationList = (
                store.locationsManager
                  .get()
                  .filter(location => location.categoryId === category.id)
                  .map(
                    location => ({
                      id: location.id,
                      name: location.name,
                    }),
                  ).sort(
                    (locationA, locationB) => {
                      if (this.isSortedAlpha) {
                        return locationA.name.toLowerCase() > locationB.name.toLowerCase() ? 1 : -1;
                      } else {
                        return 0;
                      }
                    }
                  )
              );

              return {
                name: category.name,
                locationList,
              }
            }
          )
          .filter(list => list.locationList.length > 0)
          .sort(
            (categoryA, categoryB) => {
              if (this.isSortedAlpha) {
                return categoryA.name.toLowerCase() > categoryB.name.toLowerCase() ? 1 : -1;
              } else {
                return 0;
              }
            }
          )
      );
    },
    get selectedLocationId() {
      return store.locationsManager.selectedId;
    },
    toggleSortedAlpha() {
      this.isSortedAlpha = !this.isSortedAlpha;
    },
  }));

  return useObserver(
    () => (
      <LocationList
        categoryList={localStore.categoryList}
        onSelectLocation={localStore.onSelectLocation}
        selectedLocationId={localStore.selectedLocationId}
        isSortedAlpha={localStore.isSortedAlpha}
        onToggleSortedAlpha={localStore.toggleSortedAlpha}
      />
    )
  );
}