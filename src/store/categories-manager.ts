import { CategoryStore } from "./category";
import { observable, action } from "mobx";

export class CategoriesManagerStore {
  @observable.ref
  private categoriesCache: CategoryStore[] | undefined;

  @observable
  selectedId: string | undefined;

  get() {
    if (!this.categoriesCache) {
      this.categoriesCache = this.getFromLocalStorage();
    }

    return this.categoriesCache;
  }

  @action
  select = (id: string) => {
    this.selectedId = id;
  }

  @action
  clearSelected = () => {
    this.selectedId = undefined;
  }

  private getFromLocalStorage() {
    const lsCategoriesStr = window.localStorage.getItem('categories');

    if (lsCategoriesStr) {
      return JSON.parse(lsCategoriesStr) as CategoryStore[];
    } else {
      return [ { id: '1', name: 'Category1' }, { id: '2', name: 'Category2' } ];
    }
  }
}