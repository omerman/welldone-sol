import { observable, action } from 'mobx';

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
}