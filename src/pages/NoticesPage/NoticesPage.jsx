import {
  Section,
  Container,
  NoticesSearch,
  NoticesCategoriesNav,
  AddNoticeButton,
  MainTitle,
} from 'components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Wrapper } from './NoticesPage.styled';
import { selectCategory } from 'redux/categorySlice';
import { useSelector } from 'react-redux';
import { fromCategoryToRoute } from 'helpers';

const NoticesPage = () => {
  const selected = useSelector(selectCategory);
  const [isFirstMount, setIsFirstMount] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (isFirstMount) {
      navigate(fromCategoryToRoute(selected));
      setIsFirstMount(false);
    }
  }, [navigate, isFirstMount, selected]);
  return (
    <Section>
      <Container>
        <MainTitle>Find your favorite pet</MainTitle>
        <NoticesSearch />
        <Wrapper>
          <NoticesCategoriesNav />
          <AddNoticeButton />
        </Wrapper>
        <Outlet />
      </Container>
    </Section>
  );
};

export default NoticesPage;
