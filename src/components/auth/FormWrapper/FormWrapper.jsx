import PropTypes from 'prop-types';
import { Wrapper } from './FormWrapper.styled';

export const FormWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
