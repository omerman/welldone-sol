import { observable, action } from 'mobx';
import { ILocation } from '../../entity-types/location';

export class LocationStore {
  readonly id: string;

  @observable
  name: string;

  @observable
  placeId: string | undefined;

  @observable
  categoryId: string | undefined;

  constructor(
    id: string,
    name: string,
    categoryId?: string,
  ) {
    this.id = id;
    this.name = name;
    this.categoryId = categoryId;
  }

  @action
  setPlace = (
    name: string,
    placeId: string,
  ) => {
    this.name = name;
    this.placeId = placeId;
  }

  @action
  clearPlace = () => {
    this.name = '';
    this.placeId = undefined;
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
      placeId: this.placeId as string,
    };
  }
}