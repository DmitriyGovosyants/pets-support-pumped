import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setWord } from 'redux/filterSlice';
import { SearchForm, Label, Input, Icon } from './NoticesSearch.styled';

export const NoticesSearch = ({ keyWord, setKeyWord, setPage, setPets }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (keyWord === '') {
      return;
    }
    setPage(1);
    dispatch(setWord(keyWord));
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
        <Input placeholder="Search" value={keyWord} onChange={handleChange} />
        <button type="submit">
          <Icon />
        </button>
      </Label>
    </SearchForm>
  );
};

NoticesSearch.propTypes = {
  keyWord: PropTypes.string.isRequired,
  setKeyWord: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  setPets: PropTypes.func.isRequired,
};
