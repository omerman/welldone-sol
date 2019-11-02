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

  findCategory(
    id: string
  ) {
    return this.get().find(category => category.id === id);
  }

  cloneCategory(
    id: string,
  ) {
    const category = this.findCategory(id);

    if (!category) {
      throw new Error(`Category with id ${id} can't be found`);
    } else {
      return new CategoryStore(`${id}2`, category.name);
    }
  }

  @action
  updateCategory = (
    id: string,
    name: string,
  ) => {
    const category = this.findCategory(id);

    if (!category) {
      throw new Error(`Category with id ${id} can't be found`);
    } else {
      category.setName(name);
    }
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
      return [
        new CategoryStore('1', 'Category1'),
        new CategoryStore('2', 'Category2'),
      ];
    }
  }
}