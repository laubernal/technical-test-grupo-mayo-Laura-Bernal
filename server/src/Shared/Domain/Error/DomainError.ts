export abstract class DomainError extends Error {
  constructor(message: string) {
    super(message);
  }

  public abstract serialize(): { message: string; stack: string };
}
