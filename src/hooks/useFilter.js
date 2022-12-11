import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectKeyWord } from 'redux/filterSlice';

export const useFilter = category => {
  const [search, setSearch] = useState('');
  const keyWord = useSelector(selectKeyWord);
  useEffect(() => {
    if (
      (keyWord.trim() !== '' && category === 'favorite-ads') ||
      (keyWord.trim() !== '' && category === 'my-ads')
    ) {
      setSearch('');
    } else {
      setSearch(`&search=${keyWord.trim()}`);
    }
  }, [keyWord, category]);

  return search;
};
