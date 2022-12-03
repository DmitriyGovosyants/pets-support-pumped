import PropTypes from 'prop-types';
import { routesPath } from 'router';
import { AuthNavItem, AuthNavList, AuthNavLink } from './AuthNav.styled';

export const AuthNav = ({ toggleNavBar }) => {
  return (
    <AuthNavList>
      <AuthNavItem>
        <AuthNavLink
          option={'main'}
          to={routesPath.login}
          onClick={toggleNavBar}
        >
          Login
        </AuthNavLink>
      </AuthNavItem>
      <AuthNavItem>
        <AuthNavLink to={routesPath.register} onClick={toggleNavBar}>
          Registration
        </AuthNavLink>
      </AuthNavItem>
    </AuthNavList>
  );
};

AuthNav.propTypes = {
  toggleNavBar: PropTypes.func,
};
