import { Id } from 'src/Shared/Domain/Vo/Id.vo';
import { Month } from 'src/Shared/Domain/Vo/Month.vo';
import { NumberVo } from 'src/Shared/Domain/Vo/Number.vo';
import { Temperature } from 'src/Shared/Domain/Vo/Temperature.vo';

export class Climate {
  constructor(
    _id: Id,
    private readonly _month: Month,
    private readonly _maxTemperature: Temperature,
    private readonly _minTemperature: Temperature,
    private readonly _rainDays: NumberVo,
    private readonly _rainFall: NumberVo,
    _createdAt?: Date,
    _updatedAt?: Date,
  ) {}

  public month(): Month {
    return this._month;
  }

  public maxTemperature(): Temperature {
    return this._maxTemperature;
  }

  public minTemperature(): Temperature {
    return this._minTemperature;
  }

  public rainDays(): NumberVo {
    return this._rainDays;
  }

  public rainFalls(): NumberVo {
    return this._rainFall;
  }
}
