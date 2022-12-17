import { Primitives } from "src/Shared/Infrastructure/Types";

export abstract class ValueObject {
  protected abstract validate(primitive: Primitives): boolean;

  abstract get value(): string | boolean | number | Date | null;
}
