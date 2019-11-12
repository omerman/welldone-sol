import { computed, action } from "mobx";
import { History } from "history";
import { Store } from "../../store";
import { LocationStore } from "../../store/location";
import { ILocationEditorProps } from ".";

export class LocationEditorStore {
  constructor(
    private readonly store: Store,
    private readonly history: History<any>,
    readonly templateLocation?: LocationStore,
  ) {}

  @action
  save = () => {
    if (this.templateLocation) {
      this.store.locationsManager.updateLocation(
        this.templateLocation.id,
        this.location.name,
      );
    } else {
      this.store.locationsManager.addLocation(this.location);
    }

    this.history.push('/locations');
  }

  @computed
  get props(): ILocationEditorProps {
    return {
      name: this.name,
      categoryList: this.categoryList,
      onSave: this.save,
    };
  }

  @computed
  get name() {
    return {
      value: this.location.name,
      onChange: this.location.setName,
    };
  }

  @computed
  get categoryList() {
    return {
      data: this.categoryListData,
      selectedCategoryId: this.location.categoryId,
      onChange: (categoryId: string) => {
        this.location.setCategoryId(categoryId);
      }
    };
  }

  @computed
  get location() {
    if (this.templateLocation) {
      return this.store.locationsManager.cloneLocation(this.templateLocation.id);
    } else {
      return this.store.locationsManager.createEmptyLocation();
    }
  }

  @computed
  private get categoryListData() {
    return this.store.categoriesManager.get().map(category => ({
      id: category.id,
      name: category.name,
    }));
  }
}
