import { Button, Grid, TextInput } from '@mantine/core';
import { useState } from 'react';
import { Search } from 'tabler-icons-react';

const SearchBar = (): JSX.Element => {
  const [value, setValue] = useState('');
  // console.log('VALUE', value);

  const buttonClick = async () => {
    console.log('VALUE', value);

    const response = await fetch(
      `http://localhost:5000/city?${new URLSearchParams({ search: value })}`,
      {
        method: 'GET',
        mode: 'cors',
      }
    );
    console.log('RESPONSE', await response.json());
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
