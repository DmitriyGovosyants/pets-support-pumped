import PropTypes from 'prop-types';

export const ValidationError = ({ message, isHidden }) => {
  return !isHidden && <div style={{ color: 'red' }}>{message}</div>;
};

ValidationError.propTypes = {
  message: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
};
