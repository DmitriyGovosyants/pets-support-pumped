import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export const SelectInput = ({
  options,
  name,
  defaultValue,
  onChange,
  isDisabledSearch = false,
}) => (
  <Select
    styles={{
      control: baseStyles => ({
        ...baseStyles,
        border: 'none',
        width: '150px',
        height: '44px',
        borderRadius: '20px',
      }),
    }}
    theme={theme => ({
      ...theme,
      colors: {
        ...theme.colors,
        text: 'black',
        primary25: '#FF6101',
        primary: '#F59256',
      },
    })}
    isDisabled={isDisabledSearch}
    components={animatedComponents}
    options={options}
    name={name}
    defaultValue={defaultValue}
    onChange={onChange}
  />
);

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabledSearch: PropTypes.bool,
};
