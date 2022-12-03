import PropTypes from 'prop-types';
import { Wrapper, Input, Error } from './MaskInput.styled';

export const MaskInput = ({
  placeholder,
  mask,
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
          mask={mask}
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

MaskInput.propTypes = {
  placeholder: PropTypes.string,
  mask: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isvalid: PropTypes.number.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
