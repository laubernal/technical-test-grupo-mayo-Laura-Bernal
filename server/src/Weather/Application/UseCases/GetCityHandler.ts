import { Inject } from '@nestjs/common';
import { ICityRepository } from 'src/Weather/Domain/Repository/ICityRepository';

export class GetCityHandler {
  constructor(
    @Inject('ICityRepository') private readonly repository: ICityRepository,
  ) {}
}
