import { observable, action } from 'mobx';
import { ILocation } from '../../entity-types/location';

export class LocationStore {
  readonly id: string;

  @observable
  name: string;

  @observable
  categoryId: string | undefined;

  constructor(
    id: string,
    name: string,
  ) {
    this.id = id;
    this.name = name;
  }

  @action
  setName = (name: string) => {
    this.name = name;
  }

  @action
  setCategoryId = (categoryId: string) => {
    this.categoryId = categoryId;
  }

  toSeed(): ILocation {
    return {
      id: this.id,
      name: this.name,
      categoryId: this.categoryId as string,
    };
  }
}