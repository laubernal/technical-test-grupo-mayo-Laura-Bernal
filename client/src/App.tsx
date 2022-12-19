import { Container, Space, Tabs, Text, Title } from '@mantine/core';
import { useState } from 'react';
import './App.css';
import ClimateGrid from './Components/ClimateGrid/ClimateGrid';
import ForecastTable from './Components/ForecastTable/ForecastTable';
import SearchBar from './Components/SearchBar/SearchBar';
import { Weather } from './types';

function App() {
  const [value, setValue] = useState<string>('');
  const [response, setResponse] = useState<{ data: Weather | null; error?: any }>({ data: null });

  return (
    <Container size="md" className="App">
      <Container className="SearchBar">
        <Title order={2} size="h2">
          Laura Bernal's technical test for Grupo Mayo
        </Title>
        <Space h="xl" />
        <SearchBar value={value} setValue={setValue} setResponse={setResponse} />
      </Container>
      {response.data && (
        <Container>
          <Text fz="lg" fw={400}>
            Latitude: {response.data.latitude} | Longitude: {response.data.longitude}
          </Text>
          <Space h="sm" />
          <Tabs variant="outline" radius="md" defaultValue="forecast">
            <Tabs.List grow position="center">
              <Tabs.Tab value="forecast">
                <Text fz="lg">Forecast</Text>
              </Tabs.Tab>
              <Tabs.Tab value="climate">
                <Text fz="lg">Climate</Text>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="forecast" pt="xs">
              {response.data && <ForecastTable response={response} />}
            </Tabs.Panel>

            <Tabs.Panel value="climate" pt="xs">
              {response.data && <ClimateGrid response={response} />}
            </Tabs.Panel>
          </Tabs>
        </Container>
      )}
    </Container>
  );
}

export default App;
