import styled from "@emotion/styled";


export const InputStyles = styled.div`
  & .react-datepicker__current-month,
    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__year-read-view--down-arrow {
    display: none;
  }
  & .react-datepicker__month-read-view--selected-month,
    .react-datepicker__year-read-view--selected-year {
    font-size: 20px;

    :hover {
      color: ${p => p.theme.colors.hover};
    }
  }
  & .react-datepicker__month-option,
    .react-datepicker__year-option {
    font-size: 14px;
    padding: 5px 0;
  }
`