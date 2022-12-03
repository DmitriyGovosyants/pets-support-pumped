import { useGetPetsQuery, useGetUserQuery } from 'redux/usersApi';
import {
  Section,
  Container,
  UserData,
  Logout,
  PetsData,
  Spinner,
} from 'components';
import { UserPageWrapper, UserDataWrapper } from './UserPage.styled';

const UserPage = () => {
  const { isLoading: isUserLoading, isSuccess: isUserSuccess } =
    useGetUserQuery();
  const { isLoading: isPetsLoading, isSuccess: isPetsSuccess } =
    useGetPetsQuery();

  if (isUserLoading || isPetsLoading) return <Spinner />;
  if (isUserSuccess && isPetsSuccess) {
    return (
      <Section>
        <Container>
          <UserPageWrapper>
            <UserDataWrapper>
              <UserData />
              <Logout />
            </UserDataWrapper>
            <PetsData />
          </UserPageWrapper>
        </Container>
      </Section>
    );
  }
};

export default UserPage;
