import uuid from 'uuid/v4';
import { observable, action } from "mobx";
import { LocationStore } from "./location";
import { ILocation } from "../entity-types/location";
import { Store } from '.';

const LOCAL_STORAGE_KEY = 'locations';

export class LocationsManagerStore {
  @observable
  private locationsCache: LocationStore[];

  @observable
  selectedId: string | undefined;

  constructor(
    private readonly store: Store,
  ) {
    this.locationsCache = this.getFromLocalStorage();
  }

  get() {
    return this.locationsCache;
  }

  findLocationIndex(
    id: string
  ) {
    return this.locationsCache.findIndex(location => location.id === id);
  }

  findLocation(
    id: string
  ) {
    return this.locationsCache[this.findLocationIndex(id)];
  }

  cloneLocation(
    id: string,
  ) {
    const location = this.findLocation(id);

    if (!location) {
      throw new Error(`Location with id ${id} can't be found`);
    } else {
      return new LocationStore(
        uuid(),
        location.name,
        location.categoryId,
        location.placeId,
      );
    }
  }

  createEmptyLocation() {
    return new LocationStore(uuid(), '');
  }

  @action
  deleteLocation = (
    id: string,
  ) => {
    const locationIndex = this.findLocationIndex(id);

    if (locationIndex !== -1) {
      if (this.selectedId === this.locationsCache[locationIndex].id) {
        this.clearSelected();
      }

      this.locationsCache.splice(locationIndex, 1);
      this.updateLocalStorage();
    }
  }

  @action
  updateLocation = (
    id: string,
    data: {
      name: string,
      placeId: string,
    }
  ) => {
    const location = this.findLocation(id);

    if (!location) {
      throw new Error(`Location with id ${id} can't be found`);
    } else {
      location.setPlace(data.name, data.placeId);
      this.updateLocalStorage();
    }
  }

  @action
  addLocation = (location: LocationStore) => {
    this.locationsCache.push(location);
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

  private getFromLocalStorage(): LocationStore[] {
    const lsLocationsStr = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (lsLocationsStr) {
      const rawList = JSON.parse(lsLocationsStr) as ILocation[];
      return rawList.map(
        locationSeed => new LocationStore(locationSeed.id, locationSeed.name, locationSeed.categoryId, locationSeed.placeId),
      );
    } else {
      return [];
    }
  }

  private updateLocalStorage() {
    const { locationsCache = [] } = this;

    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(
        locationsCache.map(item => item.toSeed())
      )
    );
  }
}