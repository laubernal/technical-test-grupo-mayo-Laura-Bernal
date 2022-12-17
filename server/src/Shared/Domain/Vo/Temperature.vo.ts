import { StringVo } from './String.vo';

export class Temperature extends StringVo {
  constructor(value: string) {
    super(value);

    this.validate();
  }

  get value(): string {
    return this.value;
  }
}
