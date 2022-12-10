import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';
import { ReactComponent as FavouriteIcon } from 'data/img/favourite-icon.svg';

export const FooterStyles = styled.footer`
  margin-top: auto;
  padding-top: 20px;
  padding-bottom: 20px;

  background-color: ${p => p.theme.colors.bgSecond};
`;

export const TextWrapper = styled.div`
  ${device.desktop} {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
`

export const Text = styled.p`
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 2;text-align: center;
  text-align: center;
  color: ${p => p.theme.colors.textMain};

  border-radius: 10px;
  cursor: ${p => p.highlight ? 'pointer' : 'auto'};
  
  ${device.tablet} {
    font-size: 20px;
  }

  ${device.desktop} {
    :hover,
    :focus {
      background-color: ${p => p.highlight ? p.theme.colors.bgMain : 'transparent'};
    }
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


