import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategory } from 'redux/categorySlice';
import { selectKeyWord } from 'redux/filterSlice';
import { fromCategoryToRoute } from 'helpers';
import {
  Section,
  Container,
  NoticesSearch,
  NoticesCategoriesNav,
  AddNoticeButton,
  MainTitle,
  NoticesCategoriesList,
} from 'components';
import { Wrapper } from './NoticesPage.styled';

const NoticesPage = () => {
  const word = useSelector(selectKeyWord);
  const [keyWord, setKeyWord] = useState(word);
  const [field, setField] = useState('title');
  const [page, setPage] = useState(1);
  const [pets, setPets] = useState([]);
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
        <NoticesSearch
          keyWord={keyWord}
          setKeyWord={setKeyWord}
          setPage={setPage}
          setField={setField}
          setPets={notices => setPets(notices)}
        />
        <Wrapper>
          <NoticesCategoriesNav setKeyWord={setKeyWord} />
          <AddNoticeButton />
        </Wrapper>
        <NoticesCategoriesList
          page={page}
          field={field}
          setPage={setPage}
          pets={pets}
          setPets={setPets}
        />
      </Container>
    </Section>
  );
};

export default NoticesPage;
