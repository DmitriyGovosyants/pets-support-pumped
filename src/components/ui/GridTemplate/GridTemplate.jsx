import PropTypes from 'prop-types';
import { GridList } from './GridTemplate.styled';

export const GridTemplate = ({ mobGap, tabGap, desGap, desCol, children }) => {
  return (
    <GridList mobGap={mobGap} tabGap={tabGap} desGap={desGap} desCol={desCol}>
      {children}
    </GridList>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
