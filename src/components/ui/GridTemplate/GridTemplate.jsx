import PropTypes from 'prop-types';
import { GridList } from './GridTemplate.styled';

export const GridTemplate = ({ mobileGap, children }) => {
  return <GridList mobileGap={mobileGap}>{children}</GridList>;
};

GridTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
