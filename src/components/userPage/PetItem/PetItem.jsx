import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReactComponent as EditIcon } from 'data/img/edit-icon.svg';
import { ReactComponent as DeleteIcon } from 'data/img/fluent_delete-16-filled.svg';
import petTemlate from 'data/img/pet-template.jpg';
import {
  Modal,
  ModalDelete,
  ModalEditPet,
  PetsInterfaceButton,
} from 'components';
import {
  PetItemStyled,
  ThumbImage,
  Image,
  InfoList,
  InfoRow,
  Info,
  ListButton,
} from './PetItem.styled';

export const PetItem = ({ id, image, name, dateOfBirth, breed, comments }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const addDefaultSrc = ev => {
    ev.target.src = petTemlate;
  };

  return (
    <PetItemStyled>
      <ThumbImage>
        <Image
          width={'161px'}
          onError={addDefaultSrc}
          src={image || petTemlate}
          alt="pet"
        />
      </ThumbImage>
      <InfoList>
        <li>
          <InfoRow>
            Name: <Info>{name}</Info>
          </InfoRow>
        </li>
        <li>
          <InfoRow>
            Date of birth: <Info>{dateOfBirth}</Info>
          </InfoRow>
        </li>
        <li>
          <InfoRow>
            Breed: <Info>{breed}</Info>
          </InfoRow>
        </li>
        <li>
          <InfoRow>
            Comments: <Info>{<Info>{comments}</Info>}</Info>
          </InfoRow>
        </li>
        <ListButton>
          <li>
            <PetsInterfaceButton
              type="button"
              onClick={() => setShowModalEdit(true)}
            >
              <EditIcon />
            </PetsInterfaceButton>
          </li>
          <li>
            <PetsInterfaceButton
              type="button"
              onClick={() => setShowModalDelete(true)}
            >
              <DeleteIcon />
            </PetsInterfaceButton>
          </li>
        </ListButton>
      </InfoList>
      {showModalDelete && (
        <Modal toggleModal={() => setShowModalDelete(s => !s)}>
          <ModalDelete id={id} closeModal={() => setShowModalDelete(false)} />
        </Modal>
      )}
      {showModalEdit && (
        <Modal toggleModal={() => setShowModalEdit(s => !s)}>
          <ModalEditPet
            id={id}
            image={image}
            name={name}
            birthdate={dateOfBirth}
            breed={breed}
            comments={comments}
            closeModal={() => setShowModalEdit(false)}
          />
        </Modal>
      )}
    </PetItemStyled>
  );
};

PetItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
};
