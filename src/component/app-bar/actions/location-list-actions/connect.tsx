import React from "react";
import { useObserver } from "mobx-react";
import { useHistory } from "react-router";
import { LocationListActions } from ".";
import { useStore } from "../../../common/provider/store";

export const ConnectLocationListActions: React.FC = () => {
  const store = useStore();
  // const history = useHistory();

  return useObserver(
    () => {
      return (
        <LocationListActions
          selectedLocationId={store.categoriesManager.selectedId}
          onCreateLocation={() => {
            console.log('Routing to add location');
            // history.push('/locations/create');
          }}
          onEditLocation={() => {
            console.log('Routing to edit location');
            // history.push(`/locations/edit/${store.categoriesManager.selectedId}`);
          }}
          onViewLocation={() => {
            console.log('Also routing to edit location');
            // history.push(`/locations/edit/${store.categoriesManager.selectedId}`);
          }}
          onDeleteLocation={() => {
            console.log('Deleting location');
            // const { selectedId } = store.categoriesManager;

            // if (selectedId) {
            //   store.categoriesManager.deleteCategory(selectedId);
            // }
          }}
        />
      );
    }
  );
}