import { NoticeCategoryItem, Spinner } from 'components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { GiJumpingDog } from 'react-icons/gi';
import { useGetNoticesQuery, useGetFavoritesQuery } from 'redux/noticesApi';
import { useAuth } from 'redux/useAuth';
import useRequest from 'hooks/useRequest';
import { useFilter } from 'hooks/useFilter';
import {
  List,
  Item,
  Error,
  Paginate,
  ErrorWrapper,
} from './NoticesCategoriesList.styled';

const NoticesCategoriesList = () => {
  const [pets, setPets] = useState([]);
  const [skip, setSkip] = useState(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const auth = useAuth();
  const { categoryName } = useParams();
  const [request, setRequest] = useState('?category=sell');

  useRequest(categoryName, setRequest);
  const search = useFilter(categoryName);
  const { data, isSuccess, isLoading, isError } = useGetNoticesQuery({
    request,
    page,
    search,
  });
  const { data: favoritesPets, isSuccess: isSuccessFavorites } =
    useGetFavoritesQuery('', {
      skip,
    });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    if (!auth.user) {
      setSkip(true);
    } else {
      setSkip(false);
    }
  }, [auth]);

  useEffect(() => {
    if (data) {
      setPets(data.data.notices || data.data.favoriteNotices);
    } else {
      setPets([]);
    }
  }, [data, favoritesPets]);

  useEffect(() => {
    setPage(1);
  }, [categoryName]);

  useEffect(() => {
    if (isSuccess) {
      setPageCount(Math.ceil(data.total / 12));
    }
  }, [categoryName, data, isSuccess]);

  const handlePageClick = event => {
    setPage(event.selected + 1);
  };

  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && (isSuccessFavorites || !auth.user) && (
        <List>
          {pets.map(itm => {
            let favorite;
            if (
              favoritesPets?.data.favoriteNotices.some(el => el._id === itm._id)
            ) {
              favorite = true;
            } else {
              favorite = false;
            }
            return (
              <Item key={itm._id}>
                <NoticeCategoryItem
                  petData={itm}
                  favorite={favorite}
                  isPrivate={categoryName === 'my-ads' ? true : false}
                />
              </Item>
            );
          })}
        </List>
      )}
      {(isError || (isSuccess && pets.length === 0)) && (
        <ErrorWrapper>
          <Error>There is no any animals on your query!</Error>
          <GiJumpingDog
            size={isMobile ? '20%' : '15%'}
            style={{ margin: '0 auto', fill: '#F59256' }}
          />
        </ErrorWrapper>
      )}
      {isSuccess && (isSuccessFavorites || !auth.user) && data.total > 12 && (
        <Paginate
          breakLabel={isMobile ? '..' : '...'}
          nextLabel={isMobile ? '>' : 'next'}
          onPageChange={handlePageClick}
          pageRangeDisplayed={isMobile ? 1 : 2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          initialPage={page - 1}
          previousLabel={isMobile ? '<' : 'previous'}
          renderOnZeroPageCount={null}
          activeClassName="selected"
        />
      )}
    </>
  );
};

export default NoticesCategoriesList;
