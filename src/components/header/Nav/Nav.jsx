import PropTypes from 'prop-types';
import { routesPath } from 'router';
import { NavLinkStyled, NavItem, NavList } from './Nav.styled';

export const Nav = ({ toggleNavBar }) => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLinkStyled to={routesPath.news} onClick={toggleNavBar}>
            News
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to={routesPath.notices} onClick={toggleNavBar}>
            Find pet
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to={routesPath.friends} onClick={toggleNavBar}>
            Our friends
          </NavLinkStyled>
        </NavItem>
      </NavList>
    </nav>
  );
};

Nav.propTypes = {
  toggleNavBar: PropTypes.func,
};
