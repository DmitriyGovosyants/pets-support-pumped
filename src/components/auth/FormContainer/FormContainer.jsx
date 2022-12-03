import PropTypes from 'prop-types';
import { Container } from './FormContainer.styled';

export const FormContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
