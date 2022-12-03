import PropTypes from 'prop-types';
import { Wrapper, Input, Error } from './FormInput.styled';

export const FormInput = ({
  placeholder,
  type,
  name,
  onChange,
  isvalid,
  errorMessage,
}) => {
  return (
    <>
      <Wrapper>
        <Input
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={onChange}
          isvalid={isvalid}
        />
      </Wrapper>
      {!isvalid && <Error>{errorMessage}</Error>}
    </>
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isvalid: PropTypes.number.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
