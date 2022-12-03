import styled from '@emotion/styled/macro';
import { ReactComponent as FavouriteIcon } from 'data/img/favourite-icon.svg';
import { ReactComponent as ToFavouriteIcon } from 'data/img/to-favourite-icon.svg';
import { device } from 'styles/mediaquery';
import { TiDelete } from 'react-icons/ti';

export const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 280px;
  height: 288px;
  object-fit: cover;
  ${device.tablet} {
    width: 336px;
  }
  ${device.desktop} {
    width: 288px;
  }
`;

export const StyledFavouriteIcon = styled(FavouriteIcon)`
  scale: 1;
  stroke: ${props => props.theme.colors.accent};
  fill: ${props => props.theme.colors.accent};
  transition: scale ${p => p.theme.animation.cubicBezier};
  transition: stroke ${p => p.theme.animation.cubicBezier};
  transition: fill ${p => p.theme.animation.cubicBezier};
`;

export const StyledToFavouriteIcon = styled(ToFavouriteIcon)`
  fill: ${props => props.theme.colors.btnTransperent};
  scale: 1;
  stroke: ${props => props.theme.colors.accent};
  transition: scale ${p => p.theme.animation.cubicBezier};
  transition: stroke ${p => p.theme.animation.cubicBezier};
`;

export const StyledDelete = styled(TiDelete)`
  scale: 1;
  fill: ${props => props.theme.colors.accent};
  transition: scale ${p => p.theme.animation.cubicBezier};
  transition: fill ${p => p.theme.animation.cubicBezier};
`;

export const Button = styled.button`
  position: absolute;
  top: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.btnTransperent};
  cursor: pointer;
  :hover,
  :focus {
    & ${StyledFavouriteIcon} {
      scale: 1.05;
      stroke: ${props => props.theme.colors.hover};
      fill: ${props => props.theme.colors.hover};
    }
    & ${StyledToFavouriteIcon} {
      scale: 1.05;
      stroke: ${props => props.theme.colors.hover};
    }
    & ${StyledDelete} {
      scale: 1.05;
      fill: ${props => props.theme.colors.hover};
    }
  }
  :nth-of-type(1) {
    right: 12px;
  }
  :nth-of-type(2) {
    right: 62px;
  }
`;

export const Category = styled.span`
  position: absolute;
  top: 20px;
  padding: 6px 0 6px 20px;
  width: 158px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  background-color: ${props => props.theme.colors.btnTransperent};
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  padding: 0 20px;
  word-break: break-word;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  flex-grow: 1;
`;

export const Description = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 82px 150px;
  gap: 8px;
  ${device.tablet} {
    grid-template-columns: 82px 206px;
  }
  ${device.desktop} {
    grid-template-columns: 79px 161px;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  word-break: break-word;
`;

export const LearnMore = styled.button`
  display: block;
  width: 248px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
  transition: color ${p => p.theme.animation.cubicBezier};
  transition: border-color ${p => p.theme.animation.cubicBezier};
  :hover,
  :focus {
    border-color: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.hover};
  }
`;
