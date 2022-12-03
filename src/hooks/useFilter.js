import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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
      toast.warn(
        `Sorry, but you can not search by key word in ${
          category === 'my-ads' ? 'private' : 'favorites'
        } section`
      );
    } else {
      setSearch(`&search=${keyWord.trim()}`);
    }
  }, [keyWord, category]);

  return search;
};
