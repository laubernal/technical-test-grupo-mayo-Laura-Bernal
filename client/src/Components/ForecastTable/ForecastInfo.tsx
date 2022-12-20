import { Image } from '@mantine/core';
import { LIGHT_RAIN, MOSTLY_CLOUDY, PARTLY_CLOUDY, RAIN, SCATTERED_SHOWERS } from '../../constants';
import cloudIcon from '../../Icons/clouds-48.png';
import partlyCloudyIcon from '../../Icons/partly-cloudy-day-48.png';
import lightRainIcon from '../../Icons/light-rain-48.png';
import rainIcon from '../../Icons/rain-48.png';
import scatteredShowersIcon from '../../Icons/scattered-showers-48.png';
import sunnyIcon from '../../Icons/sun-48.png';

interface props {
  date: string;
  weather: string;
  maxTemperature: string;
  minTemperature: string;
}

const ForecastInfo = ({ date, weather, maxTemperature, minTemperature }: props): JSX.Element => {
  return (
    <tr>
      <td>{date.slice(4, 10)}</td>
      <td>
        {maxTemperature}ºC / {minTemperature}ºC
      </td>
      <td>
        <Image src={iconFactory(weather)} width={32} height={32} />
      </td>
      <td>{weather}</td>
    </tr>
  );
};

export default ForecastInfo;

const iconFactory = (weather: string): string => {
  if (weather === MOSTLY_CLOUDY) {
    return cloudIcon;
  }

  if (weather === PARTLY_CLOUDY) {
    return partlyCloudyIcon;
  }

  if (weather === LIGHT_RAIN) {
    return lightRainIcon;
  }

  if (weather === RAIN) {
    return rainIcon;
  }

  if (weather === SCATTERED_SHOWERS) {
    return scatteredShowersIcon;
  }

  return sunnyIcon;
};
