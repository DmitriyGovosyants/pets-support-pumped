import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaUserCircle } from 'react-icons/fa';
import { device } from 'styles/mediaquery';

export const UserNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 6px 37px;

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
    padding: 6px 26px;
    font-size: 16px;
  }
`;

export const UserIcon = styled(FaUserCircle)`
  width: 17px;
  height: 17px;
  margin-right: 12px;

  ${device.tablet} {
    width: 24px;
    height: 24px;
  }
`