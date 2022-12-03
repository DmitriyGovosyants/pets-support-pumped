import PropTypes from 'prop-types';
import { ReactComponent as HeartIcon } from 'data/img/favourite-icon.svg';
import petTemlate from 'data/img/pet-template.jpg';
import { ModalBtnClose } from 'components';
import {
  Container,
  ImgWrapper,
  Img,
  Title,
  FeaturesList,
  FeaturesItem,
  FeaturesDescription,
  FeaturesDefinition,
  ContactButton,
  ChangeFavoriteStatusBtn,
  CategoryMark,
  ContactLink,
  FeaturesWrapper,
  Wrapper,
  BtnWrapper,
} from './ModalNotice.styled';

export const ModalNotice = ({
  petData,
  favorite,
  toggleModal,
  toggleFavourites,
}) => {
  const {
    title,
    avatarURL,
    birthdate,
    breed,
    category,
    comments,
    location,
    name,
    owner,
    price,
    sex,
  } = petData;

  const noticeCategory = category.split('-').join(' ');

  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <Img
            src={avatarURL || petTemlate}
            alt={breed}
            onError={e => {
              e.target.src = petTemlate;
            }}
          />
          <CategoryMark>{noticeCategory}</CategoryMark>
        </ImgWrapper>

        <FeaturesWrapper>
          <Title>{title}</Title>
          <FeaturesList>
            {name && (
              <FeaturesItem>
                <FeaturesDescription>Name:</FeaturesDescription>
                <FeaturesDefinition>{name}</FeaturesDefinition>
              </FeaturesItem>
            )}
            {birthdate && (
              <FeaturesItem>
                <FeaturesDescription>Birthday:</FeaturesDescription>
                <FeaturesDefinition>{birthdate}</FeaturesDefinition>
              </FeaturesItem>
            )}
            {breed && (
              <FeaturesItem>
                <FeaturesDescription>Breed:</FeaturesDescription>
                <FeaturesDefinition>{breed}</FeaturesDefinition>
              </FeaturesItem>
            )}
            <FeaturesItem>
              <FeaturesDescription>Loсation:</FeaturesDescription>
              <FeaturesDefinition>{location}</FeaturesDefinition>
            </FeaturesItem>
            <FeaturesItem>
              <FeaturesDescription>The sex:</FeaturesDescription>
              <FeaturesDefinition>{sex}</FeaturesDefinition>
            </FeaturesItem>
            {owner && (
              <>
                <FeaturesItem>
                  <FeaturesDescription>Email:</FeaturesDescription>
                  <ContactLink href={`mailto: ${owner?.email}`}>
                    {owner?.email}
                  </ContactLink>
                </FeaturesItem>
                <FeaturesItem>
                  <FeaturesDescription>Phone:</FeaturesDescription>
                  <ContactLink href={`tel: ${owner?.phone}`}>
                    {owner?.phone}
                  </ContactLink>
                </FeaturesItem>
              </>
            )}
            {category.toLowerCase() === 'sell' && (
              <FeaturesItem>
                <FeaturesDescription>Sell:</FeaturesDescription>
                <FeaturesDefinition>{price} $</FeaturesDefinition>
              </FeaturesItem>
            )}
          </FeaturesList>
        </FeaturesWrapper>
      </Wrapper>

      <FeaturesDefinition>
        <b>Comments:</b> {comments}
      </FeaturesDefinition>

      <BtnWrapper>
        <ContactButton href={`tel: ${owner?.phone}`}>Contact</ContactButton>
        <ChangeFavoriteStatusBtn type="button" onClick={toggleFavourites}>
          {!favorite ? 'Add to' : 'Remove from'}
          <HeartIcon />
        </ChangeFavoriteStatusBtn>
      </BtnWrapper>
      <ModalBtnClose toggleModal={toggleModal} />
    </Container>
  );
};

ModalNotice.propTypes = {
  petData: PropTypes.shape({
    avatarURL: PropTypes.string,
    birthdate: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string,
    sex: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  }),
  favorite: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  toggleFavourites: PropTypes.func.isRequired,
};
