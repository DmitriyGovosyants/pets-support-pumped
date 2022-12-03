import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';
import { ReactComponent as FavouriteIcon } from 'data/img/favourite-icon.svg';

export const FooterStyled = styled.footer`
  margin-top: auto;
  padding-top: 20px;
  padding-bottom: 20px;

  background-color: ${p => p.theme.colors.bgSecond};
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 2;
  color: ${p => p.theme.colors.textMain};
  cursor: ${p => p.cursor ? p.cursor : 'auto'};

  ${device.tablet} {
    font-size: 20px;
  }
`;

export const TextAccent = styled.span`
  color: ${p => p.theme.colors.accent};
`;

export const StyledFavouriteIcon = styled(FavouriteIcon)`
  padding-top: 12px;
  scale: 1.3;
  stroke: ${props => props.theme.colors.accent};
  fill: ${props => props.theme.colors.accent};

  ${device.tablet} {
    padding-top: 10px;
    scale: 1.5;
  }
`;


