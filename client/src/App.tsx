import { Container, Space, Tabs, Title } from '@mantine/core';
import { useState } from 'react';
import './App.css';
import ClimateGrid from './Components/ClimateGrid/ClimateGrid';
import ForecastGrid from './Components/ForecastGrid/ForecastGrid';
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
      <Container>
        {response.data && (
          <Tabs defaultValue="forecast">
            <Tabs.List grow position="center">
              <Tabs.Tab value="forecast">Forecast</Tabs.Tab>
              <Tabs.Tab value="climate">Climate</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="forecast" pt="xs">
              {response.data && <ForecastGrid response={response} />}
            </Tabs.Panel>

            <Tabs.Panel value="climate" pt="xs">
              {response.data && <ClimateGrid response={response} />}
            </Tabs.Panel>
          </Tabs>
        )}
      </Container>
    </Container>
  );
}

export default App;
