import PropTypes from 'prop-types';
import { fromCategoryToRoute } from 'helpers';
import {
  StyledLink,
  StyledSelectedLink,
} from './NoticesCategoriesNavButton.styled';

export const NoticesCategoriesNavButton = ({
  category,
  selected,
  categoryToggler,
}) => {
  const categoryRoute = fromCategoryToRoute(category);

  const onClickHandler = () => {
    categoryToggler(category);
  };
  if (category === selected) {
    return <StyledSelectedLink>{category}</StyledSelectedLink>;
  }
  return (
    <StyledLink onClick={onClickHandler} to={categoryRoute} category={category}>
      {category}
    </StyledLink>
  );
};

NoticesCategoriesNavButton.propTypes = {
  category: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  categoryToggler: PropTypes.func.isRequired,
};
