export class ApplicationResponse<T = any> {
  constructor(private _succeded: boolean, private _data?: T, private _error?: Error) {}

  public static success<T>(data: T): ApplicationResponse<T> {
    return new ApplicationResponse(true, data);
  }

  public static error(error: Error): ApplicationResponse {
    return new ApplicationResponse(false, undefined, error);
  }

  public succeded(): boolean {
    return this._succeded;
  }
  public data(): T | undefined {
    return this._data;
  }
  public error(): Error | undefined {
    return this._error;
  }
}
