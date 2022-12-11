import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import petTemlate from 'data/img/pet-template.jpg';
import { useSelector } from 'react-redux';
import useCategories from 'hooks/useCategories';
import { selectCategory } from 'redux/categorySlice';
import useDate from 'hooks/useDate';
import { useAuth } from 'redux/useAuth';
import {
  useAddNoticeToFavouriteMutation,
  useRemoveNoticeFromFavouriteMutation,
} from 'redux/noticesApi';
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

export const NoticeCategoryItem = ({
  petData,
  favorite,
  isPrivate,
  refetch,
}) => {
  const { _id, title, breed, location, birthdate, avatarURL, category, price } =
    petData;
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [age, setAge] = useState('');
  const [categoryName, setCategoryName] = useState('sell');
  const { user } = useAuth();
  const selected = useSelector(selectCategory);
  useCategories(category, setCategoryName);
  useDate(birthdate, setAge);
  const [addNoticeToFavourite] = useAddNoticeToFavouriteMutation();
  const [removeNoticeFromFavourite] = useRemoveNoticeFromFavouriteMutation();

  const toggleFavourites = async () => {
    if (!user) {
      toast.warn('You must sign in for add to favorites!');
      return;
    }

    try {
      if (isFavorite) {
        await removeNoticeFromFavourite(_id).unwrap();
      }
      if (!isFavorite) {
        await addNoticeToFavourite(_id).unwrap();
      }
      setIsFavorite(!isFavorite);

      if (selected === 'Favorite ads') {
        refetch();
      }
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
        <Category>{categoryName}</Category>
        <Image
          src={avatarURL || petTemlate}
          alt={breed}
          onError={e => {
            e.target.src = petTemlate;
          }}
        />
        <Button type="button" onClick={toggleFavourites}>
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
          {categoryName === 'sell' && (
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
