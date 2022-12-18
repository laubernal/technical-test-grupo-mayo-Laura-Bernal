import { TextInput } from '@mantine/core';
import { Search } from 'tabler-icons-react';

function SearchBar() {
  return (
    <TextInput
      placeholder="Search by city"
      icon={<Search size={18} strokeWidth={1.5} color={'black'} />}
    />
  );
}

export default SearchBar;
