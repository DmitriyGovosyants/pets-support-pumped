import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useGetNoticesQuery, useGetFavoritesQuery } from 'redux/noticesApi';
import { useAuth } from 'redux/useAuth';
import { useFilter } from 'hooks/useFilter';
import { GiJumpingDog } from 'react-icons/gi';
import { requestCategories } from 'constants/constants';
import { GridTemplate, NoticeCategoryItem, Spinner } from 'components';
import { Error, Paginate, IconWrapper } from './NoticesCategoriesList.styled';
import { requestErrorPopUp } from 'helpers';

export const NoticesCategoriesList = ({ page, field = 'title', setPage }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { categoryName } = useParams();
  const search = useFilter(categoryName);
  const { user } = useAuth();
  const [skipByCategory, setSkipByCategory] = useState(true);
  const [pageCount, setPageCount] = useState(1);

  const request = requestCategories[categoryName];
  const { data, isSuccess, isFetching, isError, error } = useGetNoticesQuery(
    {
      request,
      page,
      field,
      search,
    },
    { skip: skipByCategory }
  );
  const {
    data: favoritesPets,
    isSuccess: isSuccessFavorites,
    error: favoritesError,
  } = useGetFavoritesQuery('', {
    skip: !user,
  });

  useEffect(() => {
    setPage(1);
    if (categoryName) {
      setSkipByCategory(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  useEffect(() => {
    const totalPageCount = Math.ceil(data?.total / 12);
    if (totalPageCount === 0) {
      setPageCount(1);
    }
    if (isSuccess && totalPageCount !== 0) {
      setPageCount(Math.ceil(data.total / 12));
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (error || favoritesError) {
      requestErrorPopUp(error || favoritesError);
    }
  }, [error, favoritesError]);

  const handlePageClick = event => {
    setPage(event.selected + 1);
  };

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <Error>There are no animals on your request =/</Error>;
  }

  if (isSuccess && data?.data?.notices?.length === 0) {
    return (
      <IconWrapper>
        <GiJumpingDog
          size={isMobile ? '20%' : '15%'}
          style={{ margin: '0 auto', fill: '#F59256' }}
        />
      </IconWrapper>
    );
  }

  if (isSuccess && !isFetching && (isSuccessFavorites || !user)) {
    return (
      <>
        <GridTemplate desCol="4">
          {data?.data?.notices.map(itm => {
            let favorite;
            if (favoritesPets?.data.notices.some(el => el._id === itm._id)) {
              favorite = true;
            } else {
              favorite = false;
            }
            return (
              <NoticeCategoryItem
                key={itm._id}
                petData={itm}
                favorite={favorite}
                isPrivate={categoryName === 'my-ads' ? true : false}
              />
            );
          })}
        </GridTemplate>
        {data.total > 12 && (
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
  }
};

NoticesCategoriesList.propTypes = {
  page: PropTypes.number.isRequired,
  field: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};
