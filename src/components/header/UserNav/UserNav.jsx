import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { routesPath } from 'router';
import { selectCurrentEmail } from '../../../redux/authSlice';
import { UserNavLink, UserIcon } from './UserNav.styled';

export const UserNav = ({ toggleNavBar }) => {
  const email = useSelector(selectCurrentEmail);
  return (
    <UserNavLink option={'main'} to={routesPath.user} onClick={toggleNavBar}>
      <UserIcon />
      {email}
    </UserNavLink>
  );
};

UserNav.propTypes = {
  toggleNavBar: PropTypes.func,
};
