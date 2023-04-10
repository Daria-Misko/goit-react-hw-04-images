import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Input,
  Label,
  Searchbar as SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  Icon,
} from './Searchbar.styles';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return toast.error('Cannot read ');
    }
    onSubmit(inputValue);
  };

  const handleInputChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };
  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <Label>Search</Label>
          <Icon size="24px" />
        </SearchFormButton>
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus={true}
          placeholder="Search images and photos"
          onChange={handleInputChange}
        ></Input>
      </SearchForm>
    </SearchbarWrapper>
  );
};

export default Searchbar;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
