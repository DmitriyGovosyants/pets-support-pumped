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
  mobGap: PropTypes.string,
  tabGap: PropTypes.string,
  desGap: PropTypes.string,
  desCol: PropTypes.string,
  children: PropTypes.node.isRequired,
};
