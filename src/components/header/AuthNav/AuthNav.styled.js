import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { device } from "styles/mediaquery";

export const AuthNavList = styled.ul`
  display: flex;

  ${device.tablet} {
    margin-left: auto;
  }
`;

export const AuthNavItem = styled.li`
  :not(:last-child) {
    margin-right: 12px;
  }

  ${device.desktop}  {
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const AuthNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 6px 26px;
  gap: 12px;

  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${p => p.option === 'main' ? p.theme.colors.textSecond : p.theme.colors.textThird};

  background-color: ${p => p.option === 'main' ? p.theme.colors.accent : p.theme.colors.textSecond};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;

  cursor: pointer;
  transition: background-color ${p => p.theme.animation.cubicBezier},
   border-color ${p => p.theme.animation.cubicBezier},
   color ${p => p.theme.animation.cubicBezier};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hover};
    border-color: ${p => p.theme.colors.hover};
    color: ${p => p.theme.colors.textSecond};
  }

  &.active {
    color: ${p => p.option === 'main' ? p.theme.colors.textSecond : p.theme.colors.textThird};
    background-color: ${p => p.option  === 'main'? p.theme.colors.accent : p.theme.colors.textSecond};
    border: 2px solid ${p => p.theme.colors.accent};
  }

  ${device.tablet} {
    font-size: 20px;
  }
`;