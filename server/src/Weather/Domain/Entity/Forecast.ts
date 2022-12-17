import { Temperature } from 'src/Shared/Domain/Vo/Temperature.vo';
import { Weather } from 'src/Shared/Domain/Vo/Weather.vo';
import { Id } from '../../../Shared/Domain/Vo/Id.vo';

export class Forecast {
  constructor(
    private readonly _id: Id,
    private readonly _date: Date,
    private readonly _weather: Weather,
    private readonly _maxTemperature: Temperature,
    private readonly _minTemperature: Temperature
  ) {}

  public id(): Id {
    return this._id;
  }

  public date(): Date {
    return this._date;
  }

  public weather(): Weather {
    return this._weather;
  }

  public maxTemperature(): Temperature {
    return this._maxTemperature;
  }

  public minTemperature(): Temperature {
    return this._minTemperature;
  }
}
