import { computed, action } from "mobx";
import { History } from "history";
import { CategoryStore } from "../../store/category";
import { Store } from "../../store";
import { ICategoryEditorProps } from ".";

export class CategoryEditorStore {
  constructor(
    private readonly store: Store,
    private readonly history: History<any>,
    readonly templateCategory?: CategoryStore,
  ) {}

  @action
  save = () => {
    if (this.templateCategory) {
      this.store.categoriesManager.updateCategory(
        this.templateCategory.id,
        this.category.name,
      );
    } else {
      this.store.categoriesManager.addCategory(this.category);
    }

    this.history.push('/categories');
  }

  @computed
  get props(): ICategoryEditorProps {
    return {
      name: this.name,
      onSave: this.save,
    };
  }

  @computed
  get name() {
    return {
      value: this.category.name,
      onChange: this.category.setName,
    };
  }

  @computed
  get category() {
    if (this.templateCategory) {
      return this.store.categoriesManager.cloneCategory(this.templateCategory.id);
    } else {
      return this.store.categoriesManager.createEmptyCategory();
    }
  }
}
