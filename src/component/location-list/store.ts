import { observable, computed, action } from "mobx";
import { Store } from "../../store";

export class LocationListStore {
  @observable
  isSortedAlpha: boolean;

  constructor(
    private readonly store: Store,
  ) {
    this.isSortedAlpha = false;
  }

  @action
  onSelectLocation = (id: string) => {
    this.store.locationsManager.select(id);
  }

  @action
  toggleSortedAlpha = () => {
    this.isSortedAlpha = !this.isSortedAlpha;
  }

  @computed
  get categoryList() {
    return (
      this.store.categoriesManager
        .get()
        .map(
          category => {
            const locationList = (
              this.store.locationsManager
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
  }

  @computed
  get selectedLocationId() {
    return this.store.locationsManager.selectedId;
  }
}