import { observable, computed, action } from "mobx";
import { Store } from "../../store";

export class LocationListStore {
  @observable
  isSortedAlpha: boolean;

  @observable
  private hiddenCategories: string[];

  constructor(
    private readonly store: Store,
  ) {
    this.isSortedAlpha = false;
    this.hiddenCategories = [];
  }

  @action
  onSelectLocation = (id: string) => {
    this.store.locationsManager.select(id);
  }

  @action
  toggleSortedAlpha = () => {
    this.isSortedAlpha = !this.isSortedAlpha;
  }

  @action
  toggleCategoryFilterItem = (categoryId: string) => {
    const hiddenCategoryIndex = this.hiddenCategories.indexOf(categoryId);
    if (hiddenCategoryIndex !== -1) {
      this.hiddenCategories.splice(hiddenCategoryIndex, 1);
    } else {
      this.hiddenCategories.push(categoryId);
    }
  }

  @computed
  get categoryList() {
    return (
      this.categoriesWithLocations.map(
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
              id: category.id,
              name: category.name,
              locationList,
            }
          }
        )
        .sort(
          (categoryA, categoryB) => {
            if (this.isSortedAlpha) {
              return categoryA.name.toLowerCase() > categoryB.name.toLowerCase() ? 1 : -1;
            } else {
              return 0;
            }
          }
        )
        .filter(category => {
          return this.hiddenCategories.indexOf(category.id) === -1;
        })
    );
  }

  @computed
  get selectedLocationId() {
    return this.store.locationsManager.selectedId;
  }

  @computed
  get categoriesFilter() {
    return this.categoriesWithLocations.map(
      category => ({
        id: category.id,
        label: category.name,
        selected: this.hiddenCategories.indexOf(category.id) === -1,
      }),
    );
  }

  @computed
  private get categoriesWithLocations() {
    const locationList = this.store.locationsManager.get();
    return (
      this.store.categoriesManager
        .get()
        .filter(category => locationList.find(location => location.categoryId === category.id))
    )
  }
}