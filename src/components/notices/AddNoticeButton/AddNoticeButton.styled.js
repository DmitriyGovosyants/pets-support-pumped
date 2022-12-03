import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';
import { ReactComponent as PlusIcon } from 'data/img/plus-icon.svg';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  padding: 16px 24px 32px 24px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props => props.theme.colors.accent};
  transition: background-color ${p => p.theme.animation.cubicBezier};
  ${device.tablet} {
    width: 44px;
    height: 44px;
    padding: 0;
  }
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.hover};
  }
`;

export const StyledPlusIcon = styled(PlusIcon)`
  width: 32px;
  height: 32px;
  ${device.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const Wrapper = styled.div`
  ${device.mobileOnly} {
    z-index: 2;
    position: absolute;
    right: 0;
    bottom: -188px;
  }
  ${device.tablet} {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.textSecond};
  ${device.mobileOnly} {
    position: absolute;
    left: 10px;
    top: 48px;
    pointer-events: none;
  }
  ${device.tablet} {
    font-size: 20px;
    line-height: 1.35;
    color: ${props => props.theme.colors.textMain};
  }
`;
