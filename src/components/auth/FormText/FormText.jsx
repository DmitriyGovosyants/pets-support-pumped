import PropTypes from 'prop-types';
import { FormNavLink, Text, Wrapper } from './FormText.styled';

export const FormText = ({ text, link, routesPath }) => {
  return (
    <Wrapper>
      <Text>
        {text}
        <FormNavLink to={routesPath}>{link}</FormNavLink>
      </Text>
    </Wrapper>
  );
};

FormText.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  routesPath: PropTypes.string.isRequired,
};
