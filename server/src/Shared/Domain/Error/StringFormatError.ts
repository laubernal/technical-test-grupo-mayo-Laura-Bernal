import { DomainError } from './DomainError';

export class StringFormatError extends DomainError {
  constructor(private error: Error) {
    super('Must be a string');
  }

  public serialize(): { message: string; stack: string } {
    return { message: this.error.message, stack: this.error.stack! };
  }
}
