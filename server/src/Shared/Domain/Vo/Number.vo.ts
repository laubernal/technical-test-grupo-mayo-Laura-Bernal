import { z } from 'zod';
import { NumberFormatError } from '../Error/NumberFormatError';
import { ValueObject } from './ValueObject';

export class NumberVo extends ValueObject {
  constructor(private readonly _value: number) {
    super();
    this.validate();
  }

  protected validate(): boolean {
    const number = z.number();
    try {
      number.parse(this._value);

      return true;
    } catch (error) {
      throw new NumberFormatError();
    }
  }

  get value(): number {
    return this._value;
  }
}
