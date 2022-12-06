import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWord } from 'redux/filterSlice';
import { selectCategory } from 'redux/categorySlice';
import { SelectInput } from 'components';
import {
  SearchForm,
  Label,
  Input,
  Icon,
  SelectWrap,
} from './NoticesSearch.styled';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'breed', label: 'Breed' },
  { value: 'location', label: 'Place' },
  { value: 'price', label: 'Price' },
];

export const NoticesSearch = ({
  keyWord,
  setKeyWord,
  setPage,
  setField,
  setPets,
}) => {
  const selected = useSelector(selectCategory);
  const [isDisabledSearch, setIsDisabledSearch] = useState(false);
  const [selectValue, setSelectValue] = useState('false');
  const dispatch = useDispatch();

  useEffect(() => {
    if (selected === 'Favorite ads' || selected === 'My ads') {
      setIsDisabledSearch(true);
      return;
    }
    setIsDisabledSearch(false);
  }, [selected]);

  const handleSubmit = e => {
    e.preventDefault();
    if (keyWord === '') {
      return;
    }
    setPage(1);
    dispatch(setWord(keyWord));
    setField(selectValue);
    setPets([]);
  };

  const handleChange = e => {
    const value = e.target.value;
    setKeyWord(value);
    if (value.length === 0) {
      setPage(1);
      dispatch(setWord(''));
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Label>
        <Input
          placeholder="Search"
          disabled={isDisabledSearch}
          value={keyWord}
          isDisabledSearch={isDisabledSearch}
          onChange={handleChange}
        />
        <button type="submit" disabled={isDisabledSearch}>
          <Icon />
        </button>
      </Label>
      <SelectWrap>
        <h4>Search by field</h4>
        <SelectInput
          options={options}
          name={'fields'}
          defaultValue={options[0]}
          onChange={choice => setSelectValue(choice.value)}
        />
      </SelectWrap>
    </SearchForm>
  );
};

NoticesSearch.propTypes = {
  keyWord: PropTypes.string.isRequired,
  setKeyWord: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  setField: PropTypes.func.isRequired,
  setPets: PropTypes.func.isRequired,
};
