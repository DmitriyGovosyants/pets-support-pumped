import PropTypes from 'prop-types';
import { GridList } from './GridTemplate.styled';

export const GridTemplate = ({ children }) => {
  return <GridList>{children}</GridList>;
};

GridTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
