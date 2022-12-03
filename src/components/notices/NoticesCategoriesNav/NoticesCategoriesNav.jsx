import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'redux/useAuth';
import { setCategory, selectCategory } from 'redux/categorySlice';
import { categories, categoriesWithoutAuth } from 'constants/constants';
import { NoticesCategoriesNavButton } from 'components';
import { List, Item } from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectCategory);
  const [navCategories, setNavCategories] = useState(categoriesWithoutAuth);
  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      setNavCategories(categories);
    } else {
      setNavCategories(categoriesWithoutAuth);
    }
  }, [auth]);

  const categoryToggler = category => {
    dispatch(setCategory(category));
  };
  return (
    <List>
      {navCategories.map((itm, idx) => (
        <Item key={idx}>
          <NoticesCategoriesNavButton
            category={itm}
            selected={selected}
            categoryToggler={categoryToggler}
          />
        </Item>
      ))}
    </List>
  );
};
