import { StringVo } from './String';

export class Temperature extends StringVo {
  constructor(value: string) {
    super(value);

    this.validate();
  }

  get value(): string {
    return this._value;
  }
}
