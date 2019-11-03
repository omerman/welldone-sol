import uuid from 'uuid/v4';
import { observable, action } from "mobx";
import { CategoryStore } from "./category";
import { ICategory } from "../entity-types/category";

const LOCAL_STORAGE_KEY = 'categories';

export class CategoriesManagerStore {
  @observable.ref
  private categoriesCache: CategoryStore[];

  @observable
  selectedId: string | undefined;

  constructor() {
    this.categoriesCache = this.getFromLocalStorage();
  }

  get() {
    return this.categoriesCache;
  }

  findCategoryIndex(
    id: string
  ) {
    return this.categoriesCache.findIndex(category => category.id === id);
  }

  findCategory(
    id: string
  ) {
    return this.categoriesCache[this.findCategoryIndex(id)];
  }

  cloneCategory(
    id: string,
  ) {
    const category = this.findCategory(id);

    if (!category) {
      throw new Error(`Category with id ${id} can't be found`);
    } else {
      return new CategoryStore(uuid(), category.name);
    }
  }

  createEmptyCategory() {
    return new CategoryStore(uuid(), '');
  }

  @action
  deleteCategory = (
    id: string,
  ) => {
    const categoryIndex = this.findCategoryIndex(id);

    if (categoryIndex !== -1) {
      if (this.selectedId === this.categoriesCache[categoryIndex].id) {
        this.clearSelected();
      }

      this.categoriesCache.splice(categoryIndex, 1);
      this.updateLocalStorage();
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
      this.updateLocalStorage();
    }
  }

  @action
  addCategory = (category: CategoryStore) => {
    this.categoriesCache.push(category);
    this.updateLocalStorage();
  }

  @action
  select = (id: string) => {
    this.selectedId = id;
  }

  @action
  clearSelected = () => {
    this.selectedId = undefined;
  }

  private getFromLocalStorage(): CategoryStore[] {
    const lsCategoriesStr = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (lsCategoriesStr) {
      const rawList = JSON.parse(lsCategoriesStr) as ICategory[];
      return rawList.map(
        categorySeed => new CategoryStore(categorySeed.id, categorySeed.name),
      );
    } else {
      return [];
    }
  }

  private updateLocalStorage() {
    const { categoriesCache = [] } = this;

    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(
        categoriesCache.map(item => item.toSeed())
      )
    );
  }
}