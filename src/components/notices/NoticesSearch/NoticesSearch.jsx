import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { setWord, selectKeyWord } from 'redux/filterSlice';
import { Wrapper, Label, Input, Icon } from './NoticesSearch.styled';

export const NoticesSearch = () => {
  const dispatch = useDispatch();
  const word = useSelector(selectKeyWord);
  const [keyWord, setKeyWord] = useState(word);

  const changeInputValue = e => {
    setKeyWord(e.target.value);
  };

  const debouncedChangeQuery = useMemo(
    () =>
      debounce(e => {
        dispatch(setWord(e.target.value));
      }, 500),
    [dispatch]
  );

  const onChangeHandler = e => {
    changeInputValue(e);
    debouncedChangeQuery(e);
  };

  return (
    <Wrapper>
      <Label>
        <Input
          placeholder="Search"
          value={keyWord}
          onChange={onChangeHandler}
        />
        <Icon />
      </Label>
    </Wrapper>
  );
};
