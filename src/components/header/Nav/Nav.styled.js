import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { device } from "styles/mediaquery";


export const NavList = styled.ul`
  ${device.notDesktop} {
    padding: 68px 0;
  }

  ${device.desktop} {
    display: flex;
  }
`;
export const NavItem = styled.li`
  text-align: center;

  ${device.notDesktop}  {
    :not(:last-child) {
      margin-bottom: 40px;
    }
  }

  ${device.desktop}  {
    :not(:last-child) {
      margin-right: 80px;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  width: 100%;

  font-size: 32px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.dark};

  &.active {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.hover};
    text-decoration: underline;
  }

  ${device.tablet}  {
    font-size: 48px;
  }

  ${device.desktop}  {
    font-size: 20px;
    line-height: 1.35;
  }
`;
