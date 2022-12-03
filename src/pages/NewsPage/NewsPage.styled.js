import styled from '@emotion/styled/macro';
import { device } from 'styles/mediaquery';
import { ReactComponent as SearchIcon } from 'data/img/search-icon.svg'

export const Icon = styled(SearchIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  pointer-events: none;
  fill: ${props => props.theme.colors.textMain};
  transition: fill ${p => p.theme.animation.cubicBezier};
  ${device.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled.input`
  width: 280px;
  height: 40px;
  padding: 9px 12px;
  border-radius: 20px;
  border: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  background: ${props => props.theme.colors.textSecond};
  box-shadow: 7px 4px 14px ${props => props.theme.colors.shadow};
  outline: none;
  transition: outline-color ${p => p.theme.animation.cubicBezier};
  :hover,
  :focus {
    & + ${Icon} {
      fill: ${props => props.theme.colors.hover};
    }
  }
  ${device.tablet} {
    width: 608px;
    height: 44px;
    padding: 8px 20px;
    border-radius: 40px;
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const Label = styled.div`
  position: relative;
`

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  ${device.tablet} {
    padding-bottom: 60px;
  }
`;

export const NewsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 42px;
    grid-row-gap: 60px;
  }
  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 34px;
  }
`;
