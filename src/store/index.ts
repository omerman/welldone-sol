import { CategoriesManagerStore } from "./categories-manager";
import { LocationsManagerStore } from "./locations-manager";

export class Store {
  readonly categoriesManager: CategoriesManagerStore;

  readonly locationsManager: LocationsManagerStore;

  constructor() {
    this.categoriesManager = new CategoriesManagerStore();
    this.locationsManager = new LocationsManagerStore(this);
  }
}