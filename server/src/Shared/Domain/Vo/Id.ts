import { NumberVo } from './Number';

export class Id extends NumberVo {
  constructor(value: number) {
    super(value);

    this.validate();
  }

  get value(): number {
    return this.value;
  }
}
