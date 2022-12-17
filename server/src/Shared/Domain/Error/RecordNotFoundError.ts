import { DomainError } from './DomainError';

export class RecordNotFoundError extends DomainError {
  constructor() {
    super('Record not found');
  }

  public serialize(): { message: string; stack: string } {
    return { message: 'Record not found', stack: 'Record not found' };
  }
}
