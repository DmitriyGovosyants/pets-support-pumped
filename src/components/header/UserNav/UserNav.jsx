import PropTypes from 'prop-types';
import { routesPath } from 'router';
import { UserNavLink, UserIcon } from './UserNav.styled';

export const UserNav = ({ toggleNavBar }) => {
  return (
    <UserNavLink option={'main'} to={routesPath.user} onClick={toggleNavBar}>
      <UserIcon />
      Account
    </UserNavLink>
  );
};

UserNav.propTypes = {
  toggleNavBar: PropTypes.func,
};
