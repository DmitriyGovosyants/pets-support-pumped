import PropTypes from 'prop-types';
import { ErrorBox } from './InputErrorBox.styled';

export const InputErrorBox = ({ children }) => {
  return <ErrorBox>{children}</ErrorBox>;
};

InputErrorBox.propTypes = {
  children: PropTypes.node,
};
