import { observable, action } from 'mobx';
import { ICategory } from '../../entity-types/category';

export class CategoryStore {
  readonly id: string;

  @observable
  name: string;

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

  toSeed(): ICategory {
    return {
      id: this.id,
      name: this.name,
    };
  }
}