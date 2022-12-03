import { PetsList, AddUsersPet } from 'components';
import { PetsDataStyled, PetsDataHeader, Title } from './PetsData.styled';

export const PetsData = () => {
  return (
    <PetsDataStyled>
      <PetsDataHeader>
        <Title>My pets:</Title>
        <AddUsersPet />
      </PetsDataHeader>
      <PetsList />
    </PetsDataStyled>
  );
};
