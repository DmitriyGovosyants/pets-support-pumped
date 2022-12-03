import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';
import ReactPaginate from 'react-paginate';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding-bottom: 32px;
  border-radius: 0px 0px 20px 20px;
  background: ${props => props.theme.colors.textSecond};
  box-shadow: 7px 4px 14px ${props => props.theme.colors.shadow};
  ${device.tablet} {
    width: 336px;
    border-radius: 0px 0px 40px 40px;
  }
  ${device.desktop} {
    width: 288px;
  }
`;

export const Error = styled.p`
  font-size: 24px;
  line-height: 1.375;
  ${device.tablet} {
    font-size: 36px;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Paginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2px;
  margin-top: 40px;
  list-style-type: none;
  ${device.tablet} {
    gap: 8px;
  }
  li a {
    border: 2px solid ${props => props.theme.colors.accent};
    border-radius: 40px;
    padding: 6px 6px;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.04em;
    background-color: ${props => props.theme.colors.textSecond};
    cursor: pointer;
    transition: color ${p => p.theme.animation.cubicBezier};
    transition: background-color ${p => p.theme.animation.cubicBezier};
    :hover,
    :focus {
      background-color: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.textSecond};
    }
    ${device.tablet} {
      padding: 6px 22px;
    }
  }
  li.selected a {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.textSecond};
    min-width: 32px;
  }
  li.disabled a {
    color: ${props => props.theme.colors.textLowOpacity};
    border-color: ${props => props.theme.colors.textLowOpacity};
    :hover,
    :focus {
      background-color: ${props => props.theme.colors.btnTransperent};
      color: ${props => props.theme.colors.textLowOpacity};
    }
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
