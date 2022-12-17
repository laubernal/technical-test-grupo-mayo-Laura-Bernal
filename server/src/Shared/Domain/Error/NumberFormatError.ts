import { DomainError } from './DomainError';

export class NumberFormatError extends DomainError {
  constructor(private error: Error) {
    super('Must be a number');
  }

  public serialize(): { message: string; stack: string } {
    return { message: this.error.message, stack: this.error.stack! };
  }
}
