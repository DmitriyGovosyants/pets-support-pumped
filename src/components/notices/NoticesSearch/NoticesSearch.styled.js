import styled from '@emotion/styled/macro';
import { device } from 'styles/mediaquery';
import { ReactComponent as SearchIcon } from 'data/img/search-icon.svg';

export const SearchForm = styled.form`
  width: 280px;
  margin: 0 auto;
  margin-bottom: 28px;
  ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 40px;
    width: 704px;
  }
`;

export const Label = styled.label`
  position: relative;
  & > button {
    position: absolute;
    padding-top: 3px;
    right: 5px;
    width: 44px;
    height: 44px;
    border: 0;
    cursor: ${({ isDisabledSearch }) =>
      isDisabledSearch ? 'default' : 'pointer'};
  }
`;

export const Icon = styled(SearchIcon)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.textMain};
  transition: fill ${({ theme }) => theme.animation.cubicBezier};
  ${device.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled.input`
  width: 280px;
  height: 40px;
  margin-bottom: 10px;
  padding: 9px 12px;
  border-radius: 20px;
  border: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  background: ${({ theme, isDisabledSearch }) =>
    isDisabledSearch ? 'rgb(242,242,242)' : theme.colors.textSecond};
  box-shadow: 7px 4px 14px ${({ theme }) => theme.colors.shadow};
  outline: none;
  transition: outline-color ${({ theme }) => theme.animation.cubicBezier};
  :hover,
  :focus {
    & + ${Icon} {
      fill: ${({ theme }) => theme.colors.hover};
    }
  }
  ${device.tablet} {
    width: 500px;
    height: 44px;
    margin-bottom: 0;
    padding: 8px 20px;
    border-radius: 40px;
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const SelectWrap = styled.div`
  & div {
    ${device.mobile} {
      margin: 0 auto;
    }
  }
`;
