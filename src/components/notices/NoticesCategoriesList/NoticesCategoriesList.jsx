import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useGetNoticesQuery, useGetFavoritesQuery } from 'redux/noticesApi';
import { useAuth } from 'redux/useAuth';
import useRequest from 'hooks/useRequest';
import { useFilter } from 'hooks/useFilter';
import { GiJumpingDog } from 'react-icons/gi';
import { GridTemplate, NoticeCategoryItem, Spinner } from 'components';
import {
  Item,
  Error,
  Paginate,
  ErrorWrapper,
} from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({
  page,
  field = 'title',
  setPage,
  notices,
  setNotices,
}) => {
  const [skipFavorites, setSkipFavorites] = useState(true);
  const [skipByCategory, setSkipByCategory] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const auth = useAuth();
  const { categoryName } = useParams();
  const [request, setRequest] = useState('?category=sell');

  useRequest(categoryName, setRequest);
  const search = useFilter(categoryName);
  const { data, isSuccess, isLoading, isError } = useGetNoticesQuery(
    {
      request,
      page,
      field,
      search,
    },
    { skip: skipByCategory }
  );
  const { data: favoritesPets, isSuccess: isSuccessFavorites } =
    useGetFavoritesQuery('', {
      skip: skipFavorites,
    });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    if (!auth.user) {
      return;
    }
    setSkipFavorites(false);
  }, [auth]);

  useEffect(() => {
    if (data) {
      setNotices(data?.data.notices);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, favoritesPets]);

  useEffect(() => {
    setPage(1);
    setNotices([]);
    if (categoryName) {
      setSkipByCategory(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  useEffect(() => {
    if (isSuccess) {
      setPageCount(Math.ceil(data.total / 12));
    }
  }, [data, isSuccess]);

  if (isError) {
    setTimeout(() => {
      setNotices(data.data.notices);
    }, 3000);
  }

  const handlePageClick = event => {
    setPage(event.selected + 1);
  };

  console.log(isLoading);

  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && (isSuccessFavorites || !auth.user) && (
        <GridTemplate desCol="4">
          {notices.map(itm => {
            let favorite;
            if (favoritesPets?.data.notices.some(el => el._id === itm._id)) {
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
        </GridTemplate>
      )}
      {(isError || (isSuccess && data?.data?.notices?.length === 0)) && (
        <ErrorWrapper>
          <Error>There is no any animals on your query!</Error>
          <GiJumpingDog
            size={isMobile ? '20%' : '15%'}
            style={{ margin: '0 auto', fill: '#F59256' }}
          />
        </ErrorWrapper>
      )}
      {!isLoading &&
        isSuccess &&
        (isSuccessFavorites || !auth.user) &&
        data.total > 12 && (
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

NoticesCategoriesList.propTypes = {
  page: PropTypes.number.isRequired,
  field: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  notices: PropTypes.arrayOf(PropTypes.object).isRequired,
  setNotices: PropTypes.func.isRequired,
};
