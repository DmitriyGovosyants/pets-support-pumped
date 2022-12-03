import PropTypes from 'prop-types';
import { Button } from './PetsInterfaceButton.styled';

export const PetsInterfaceButton = ({ children, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

PetsInterfaceButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
