import { Container, Grid, Image, Text, Title } from '@mantine/core';
import { LIGHT_RAIN, MOSTLY_CLOUDY, PARTLY_CLOUDY, RAIN, SCATTERED_SHOWERS } from '../../constants';
import cloudIcon from '../../Icons/clouds-48.png';
import partlyCloudyIcon from '../../Icons/partly-cloudy-day-48.png';
import lightRainIcon from '../../Icons/light-rain-48.png';
import rainIcon from '../../Icons/rain-48.png';
import scatteredShowersIcon from '../../Icons/scattered-showers-48.png';
import sunnyIcon from '../../Icons/sun-48.png';

interface props {
  month: string;
  weather: string;
  maxTemperature: string;
  minTemperature: string;
  rainFall: string;
}

const ClimateInfo = ({
  month,
  weather,
  maxTemperature,
  minTemperature,
  rainFall,
}: props): JSX.Element => {
  return (
    <Container>
      <Grid>
        <Grid.Col span={3}>
          <Title order={5}>{month}</Title>
          <Image src={iconFactory(weather)} width={32} height={32} />
          <Text fz="sm">
            {maxTemperature}º / {minTemperature}º
          </Text>
          <Text fz="xs">{rainFall} mm</Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ClimateInfo;

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
