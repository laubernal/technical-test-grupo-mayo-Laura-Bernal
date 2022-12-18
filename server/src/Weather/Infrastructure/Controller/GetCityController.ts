import { Body, Controller, Get, Query } from '@nestjs/common';
import { GetCityDto } from 'src/Weather/Application/Dto/GetCityDto';
import { GetCityHandler } from 'src/Weather/Application/UseCases/GetCityHandler';
import { CityPresenter } from './CityPresenter';
import { GetCityApiRequest } from './GetCityApiRequest';
import { GetCityApiResponse } from './GetCityApiResponse';

@Controller()
export class GetCityController {
  constructor(
    private readonly handler: GetCityHandler,
    private readonly presenter: CityPresenter
  ) {}

  @Get('/city')
  public async GetCity(@Query() queryParams: GetCityApiRequest): Promise<GetCityApiResponse> {
    console.log('BODY', queryParams);

    const getCityDto = new GetCityDto(queryParams.search);

    const response = await this.handler.execute(getCityDto);

    return this.presenter.present(response);
  }
}
