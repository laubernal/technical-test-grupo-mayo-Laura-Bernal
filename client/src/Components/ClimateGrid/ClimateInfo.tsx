import { Flex, Grid, Image, Text, Title } from '@mantine/core';
import rainIcon from '../../Icons/rain-48.png';
import sunnyIcon from '../../Icons/sun-48.png';

interface props {
  month: string;
  maxTemperature: string;
  minTemperature: string;
  rainDays: string;
  rainFall: string;
}

const ClimateInfo = ({
  month,
  maxTemperature,
  minTemperature,
  rainDays,
  rainFall,
}: props): JSX.Element => {
  return (
    <Grid justify="center">
      <Grid.Col>
        <Title order={5}>{new Date(month).toLocaleString('en-us', { month: 'long' })}</Title>
      </Grid.Col>
      <Grid.Col>
        <Flex justify="center">
          <Image src={iconFactory(month, rainDays)} width={32} height={32} />
        </Flex>
      </Grid.Col>
      <Grid.Col>
        <Text fz="md">
          {maxTemperature}ºC / {minTemperature}ºC
        </Text>
      </Grid.Col>
      <Grid.Col>
        <Text fz="sm">{rainFall} mm</Text>
      </Grid.Col>
    </Grid>
  );
};

export default ClimateInfo;

const iconFactory = (month: string, rainDays: string): string => {
  const monthDays = new Date(2022, parseInt(month), 0).getDate();

  const halfMonthDays = monthDays / 2;

  if (parseInt(rainDays) > halfMonthDays) {
    return rainIcon;
  }

  return sunnyIcon;
};
