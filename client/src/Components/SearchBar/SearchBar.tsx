import { Button, Grid, TextInput } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import { Weather } from '../../types';

interface props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setResponse: React.Dispatch<
    React.SetStateAction<{
      data: Weather | null;
      error?: any;
    }>
  >;
}

const SearchBar = ({ value, setValue, setResponse }: props): JSX.Element => {
  const buttonClick = async () => {
    const response = await fetch(
      `http://localhost:5000/city?${new URLSearchParams({
        search: value,
      })}`,
      {
        method: 'GET',
        mode: 'cors',
      }
    );

    setResponse(await response.json());
  };

  return (
    <Grid>
      <TextInput
        placeholder="Search by city"
        icon={<Search size={24} strokeWidth={1.5} color={'black'} />}
        size="md"
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
      />
      <Button variant="subtle" color="white" size="md" onClick={() => buttonClick()}>
        Search
      </Button>
    </Grid>
  );
};

export default SearchBar;
