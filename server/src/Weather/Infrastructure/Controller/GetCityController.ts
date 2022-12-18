import { Body, Controller, Get } from '@nestjs/common';
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
  public async GetCity(@Body() body: GetCityApiRequest): Promise<GetCityApiResponse> {
    const getCityDto = new GetCityDto(body.name);

    const response = await this.handler.execute(getCityDto);

    return this.presenter.present(response);
  }
}
