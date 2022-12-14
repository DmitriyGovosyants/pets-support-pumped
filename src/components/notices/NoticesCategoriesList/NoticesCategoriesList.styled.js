import ReactPaginate from 'react-paginate';
import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Error = styled.p`
  font-size: 24px;
  line-height: 1.375;
  text-align: center;

  ${device.tablet} {
    font-size: 36px;
  }
`;

export const IconWrapper = styled.div`
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
    padding: 6px 6px;

    font-weight: 500;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.04em;

    background-color: ${props => props.theme.colors.textSecond};
    border: 2px solid ${props => props.theme.colors.accent};
    border-radius: 40px;
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
    min-width: 32px;

    color: ${props => props.theme.colors.textSecond};
    background-color: ${props => props.theme.colors.accent};
  }

  li.disabled a {
    color: ${props => props.theme.colors.textLowOpacity};
    border-color: ${props => props.theme.colors.textLowOpacity};

    :hover,
    :focus {
      color: ${props => props.theme.colors.textLowOpacity};
      background-color: ${props => props.theme.colors.btnTransperent};
    }
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
