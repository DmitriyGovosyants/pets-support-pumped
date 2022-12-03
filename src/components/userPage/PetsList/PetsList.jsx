import { useGetPetsQuery } from 'redux/usersApi';
import { PetItem } from 'components';
import { PetsListStyled, EmptyTemplate } from './PetsList.styled';

export const PetsList = () => {
  const {
    data: {
      data: { pet: pets },
    },
    isError,
    error,
  } = useGetPetsQuery();

  if (isError) {
    if (error?.status === 404) {
      return <div>...Not Found...</div>;
    }
  }

  if (pets.length === 0) {
    return <EmptyTemplate>Add your cute pets here</EmptyTemplate>;
  }

  if (pets) {
    return (
      <PetsListStyled>
        {pets.map(({ _id, avatarURL, name, birthdate, breed, comments }) => {
          return (
            <PetItem
              key={_id}
              id={_id}
              image={avatarURL}
              name={name}
              dateOfBirth={birthdate}
              breed={breed}
              comments={comments}
            />
          );
        })}
      </PetsListStyled>
    );
  }
};
