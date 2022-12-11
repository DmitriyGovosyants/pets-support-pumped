import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWord } from 'redux/filterSlice';
import { selectCategory } from 'redux/categorySlice';
import { InputSelect } from 'components';
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
  { value: 'location', label: 'Location' },
];

export const NoticesSearch = ({
  keyWord,
  setKeyWord,
  setPage,
  setField,
  setNotices,
}) => {
  const selected = useSelector(selectCategory);
  const [isDisabledSearch, setIsDisabledSearch] = useState(false);
  const [selectField, setSelectField] = useState('title');
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
    setField(selectField);
    setPage(1);
    dispatch(setWord(keyWord));
    setNotices([]);
  };

  const handleChange = e => {
    const value = e.target.value;
    setKeyWord(value);
    if (value.length === 0) {
      console.log(value);
      setPage(1);
      dispatch(setWord(''));
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Label isDisabledSearch={isDisabledSearch}>
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
        <InputSelect
          options={options}
          name={'fields'}
          defaultValue={options[0]}
          onChange={choice => setSelectField(choice.value)}
          isDisabledSearch={isDisabledSearch}
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
  setNotices: PropTypes.func.isRequired,
};
