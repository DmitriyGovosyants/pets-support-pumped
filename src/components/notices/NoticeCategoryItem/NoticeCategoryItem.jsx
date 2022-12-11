import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDate } from 'hooks/useDate';
import { useAuth } from 'redux/useAuth';
import {
  useAddNoticeToFavouriteMutation,
  useRemoveNoticeFromFavouriteMutation,
} from 'redux/noticesApi';
import petTemlate from 'data/img/pet-template.jpg';
import { requestErrorPopUp } from 'helpers';
import { Modal, ModalNotice, ModalDeleteNotice } from 'components';
import {
  Item,
  ImgWrapper,
  Image,
  Button,
  StyledFavouriteIcon,
  StyledToFavouriteIcon,
  Category,
  Title,
  Description,
  About,
  Text,
  LearnMore,
  StyledDelete,
} from './NoticeCategoryItem.styled';

export const NoticeCategoryItem = ({ petData, favorite, isPrivate }) => {
  const { _id, title, breed, location, birthdate, avatarURL, category, price } =
    petData;
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const { user } = useAuth();
  const [age] = useDate(birthdate);

  const [addToFavourite, { isLoading: isLoadingAdd }] =
    useAddNoticeToFavouriteMutation();
  const [removeFromFavourite, { isLoading: isLoadingRemove }] =
    useRemoveNoticeFromFavouriteMutation();

  const toggleFavourites = async () => {
    if (!user) {
      toast.warn('You must sign in for add to favorites!');
      return;
    }

    try {
      if (!isFavorite) {
        await addToFavourite(_id).unwrap();
      }
      if (isFavorite) {
        await removeFromFavourite(_id).unwrap();
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      setIsFavorite(isFavorite);
      requestErrorPopUp(error);
    }
  };

  const removePrivate = () => {
    setShowModalDelete(true);
  };

  return (
    <Item>
      <ImgWrapper>
        <Category>{category.split('-').join(' ')}</Category>
        <Image
          src={avatarURL || petTemlate}
          alt={breed}
          onError={e => {
            e.target.src = petTemlate;
          }}
        />
        <Button
          type="button"
          disabled={isLoadingAdd || isLoadingRemove}
          onClick={toggleFavourites}
        >
          {isFavorite ? <StyledFavouriteIcon /> : <StyledToFavouriteIcon />}
        </Button>
        {isPrivate && (
          <Button type="button" onClick={removePrivate}>
            <StyledDelete size="34px" />
          </Button>
        )}
      </ImgWrapper>
      <Title>{title}</Title>
      <About>
        <Description>
          <Text>Breed:</Text>
          <Text>{breed || '-'}</Text>
          <Text>Place:</Text>
          <Text>{location}</Text>
          <Text>Age:</Text>
          <Text>{age}</Text>
          {category === 'sell' && (
            <>
              <Text>Price:</Text>
              <Text>{price} $</Text>
            </>
          )}
        </Description>
        <LearnMore type="button" onClick={() => setShowModal(true)}>
          Learn more
        </LearnMore>
      </About>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <ModalNotice
            petData={petData}
            favorite={isFavorite}
            closeModal={() => setShowModal(false)}
            toggleFavourites={toggleFavourites}
            isLoadingAdd={isLoadingAdd}
            isLoadingRemove={isLoadingRemove}
          />
        </Modal>
      )}
      {showModalDelete && (
        <Modal closeModal={() => setShowModalDelete(false)}>
          <ModalDeleteNotice
            id={_id}
            closeModal={() => setShowModalDelete(false)}
          />
        </Modal>
      )}
    </Item>
  );
};

NoticeCategoryItem.propTypes = {
  petData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    breed: PropTypes.string,
    location: PropTypes.string.isRequired,
    birthdate: PropTypes.string,
    avatarURL: PropTypes.string,
    category: PropTypes.string.isRequired,
    price: PropTypes.string,
  }).isRequired,
  favorite: PropTypes.bool.isRequired,
  isPrivate: PropTypes.bool.isRequired,
};
