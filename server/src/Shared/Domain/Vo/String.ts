import { z } from 'zod';
import { StringFormatError } from 'src/Shared/Domain/Error/StringFormatError';
import { ValueObject } from './ValueObject';

export class StringVo extends ValueObject {
  constructor(protected readonly _value: string) {
    super();
    this.validate();
  }

  protected validate(): boolean {
    const string = z.string();
    try {
      string.parse(this._value);

      return true;
    } catch (error: any) {
      throw new StringFormatError(error);
    }
  }

  get value(): string {
    return this._value;
  }
}
