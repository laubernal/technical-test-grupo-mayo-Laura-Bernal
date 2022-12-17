import { NumberVo } from './Number.vo';

export class Temperature extends NumberVo {
  constructor(value: number) {
    super(value);

    this.validate();
  }

  get value(): number {
    return this.value;
  }
}
