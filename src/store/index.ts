import { CategoriesManagerStore } from "./categories-manager";

export class Store {
  readonly categoriesManager: CategoriesManagerStore;

  constructor() {
    this.categoriesManager = new CategoriesManagerStore();
  }
}