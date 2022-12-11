import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { InputStyles } from './InputBirthdate.styled';

export const InputBirthdate = ({ control, birthdate, disabled }) => {
  return (
    <InputStyles>
      <Controller
        name="birthdate"
        control={control}
        render={({ field }) => (
          <DatePicker
            id="birthdate-add-notice"
            placeholderText="Type date of birth"
            onChange={date => {
              field.onChange(parseInt(Date.parse(date), 10));
            }}
            value={birthdate}
            selected={field.value}
            dateFormat="dd.MM.yyyy"
            maxDate={new Date()}
            minDate={new Date(Date.UTC(1900, 0, 1))}
            showMonthDropdown={true}
            showYearDropdown={true}
            scrollableYearDropdown={true}
            yearDropdownItemNumber={100}
            disabled={disabled}
            autoComplete="off"
          />
        )}
      />
    </InputStyles>
  );
};

InputBirthdate.propTypes = {
  control: PropTypes.object.isRequired,
  birthdate: PropTypes.number,
  disabled: PropTypes.bool,
};
