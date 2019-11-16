import { observable, action, computed } from 'mobx';
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
    placeId?: string,
  ) {
    this.id = id;
    this.name = name;
    this.categoryId = categoryId;
    this.placeId = placeId;
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

  @computed
  get coordinates() {
    // Google won't let me use maps and geocoding api without setting a billing method
    // so I'm mocking it.

    if (this.placeId) {
      console.warn(`mock coordinates for place ${this.placeId}`);

      return {
        lat: Math.floor(Math.random() * 60) + 59,
        lng: Math.floor(Math.random() * 31) + 30,
      };
    } else {
      return undefined;
    }
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