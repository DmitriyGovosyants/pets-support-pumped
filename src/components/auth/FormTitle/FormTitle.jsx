import PropTypes from 'prop-types';
import { Title } from './FormTitle.styled';

export const FormTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
