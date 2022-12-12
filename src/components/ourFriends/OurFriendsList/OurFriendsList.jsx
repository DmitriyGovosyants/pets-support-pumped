import { useGetFriendsQuery } from 'redux/friendsApi';
import { GridTemplate, OurFriendItem, Spinner } from 'components';

export const OurFriendsList = () => {
  const { data: friends, isLoading, isError, error } = useGetFriendsQuery();

  if (isLoading) return <Spinner />;

  if (isError) {
    if (error?.status === 404) {
      return (
        <div style={{ textAlign: 'center' }}>... Resourses not found ...</div>
      );
    }
    if (error?.status === 500) {
      return (
        <div style={{ textAlign: 'center' }}>... Server not response ...</div>
      );
    }
    return <div style={{ textAlign: 'center' }}>... Error ...</div>;
  }

  if (friends) {
    return (
      <GridTemplate mobGap="16px 16px">
        {friends.data.map(
          ({
            title,
            url,
            imageUrl,
            workDays,
            address,
            addressUrl,
            email,
            phone,
          }) => {
            return (
              <OurFriendItem
                key={url}
                title={title}
                url={url}
                imageUrl={imageUrl}
                workDays={workDays}
                address={address}
                addressUrl={addressUrl}
                email={email}
                phone={phone}
              />
            );
          }
        )}
      </GridTemplate>
    );
  }
};
