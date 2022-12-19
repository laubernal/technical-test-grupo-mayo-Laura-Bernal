import { Container, Grid, Image, Text, Title } from '@mantine/core';
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
    <Container>
      <Grid>
        <Grid.Col span={3}>
          <Title order={5}>{month}</Title>
          <Image src={iconFactory(month, rainDays)} width={32} height={32} />
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

const iconFactory = (month: string, rainDays: string): string => {
  const monthDays = new Date(2022, parseInt(month), 0).getDate();

  const halfMonthDays = monthDays / 2;

  if (parseInt(rainDays) > halfMonthDays) {
    return rainIcon;
  }

  return sunnyIcon;
};
