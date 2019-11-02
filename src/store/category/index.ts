import { observable } from 'mobx';

export class CategoryStore {
  readonly id: string;

  @observable
  readonly name: string;

  constructor(
    id: string,
    name: string,
  ) {
    this.id = id;
    this.name = name;
  }
}