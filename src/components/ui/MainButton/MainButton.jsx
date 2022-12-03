import PropTypes from 'prop-types';
import { Btn } from './MainButton.styled';

export const MainButton = ({
  children,
  onClick,
  type = 'button',
  option,
  size,
  width,
  disabled = false,
}) => {
  return (
    <Btn
      onClick={onClick}
      type={type}
      option={option}
      size={size}
      width={width}
      disabled={disabled}
    >
      {children}
    </Btn>
  );
};

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  option: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
};
