import PropTypes from 'prop-types';
import { ReactComponent as HeartIcon } from 'data/img/favourite-icon.svg';
import petTemlate from 'data/img/pet-template.jpg';
import { ModalBtnClose } from 'components';
import {
  Container,
  ImgWrapper,
  Img,
  Title,
  List,
  Item,
  Label,
  Description,
  ContactButton,
  BtnFavorite,
  CategoryMark,
  ContactLink,
  FeaturesWrapper,
  Wrapper,
  BtnWrapper,
} from './ModalNotice.styled';

export const ModalNotice = ({
  petData,
  favorite,
  closeModal,
  toggleFavourites,
  isLoadingAdd,
  isLoadingRemove,
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
          <CategoryMark>{category.split('-').join(' ')}</CategoryMark>
        </ImgWrapper>

        <FeaturesWrapper>
          <Title>{title}</Title>
          <List>
            <Item>
              <Label>Name:</Label>
              <Description>{name ? name : '-'}</Description>
            </Item>
            <Item>
              <Label>Birthday:</Label>
              <Description>{birthdate ? birthdate : '-'}</Description>
            </Item>
            <Item>
              <Label>Breed:</Label>
              <Description>{breed ? breed : '-'}</Description>
            </Item>
            <Item>
              <Label>Loсation:</Label>
              <Description>{location}</Description>
            </Item>
            <Item>
              <Label>The sex:</Label>
              <Description>{sex}</Description>
            </Item>
            {owner && (
              <>
                <Item>
                  <Label>Email:</Label>
                  <ContactLink href={`mailto: ${owner?.email}`}>
                    {owner?.email}
                  </ContactLink>
                </Item>
                <Item>
                  <Label>Phone:</Label>
                  <ContactLink href={`tel: ${owner?.phone}`}>
                    {owner?.phone}
                  </ContactLink>
                </Item>
              </>
            )}
            {price && (
              <Item>
                <Label>Price:</Label>
                <Description>{price} $</Description>
              </Item>
            )}
          </List>
        </FeaturesWrapper>
      </Wrapper>

      <Description>
        <b>Comments:</b> {comments}
      </Description>

      <BtnWrapper>
        <ContactButton href={`tel: ${owner?.phone}`}>Contact</ContactButton>
        <BtnFavorite
          type="button"
          onClick={toggleFavourites}
          disabled={isLoadingAdd || isLoadingRemove}
        >
          {!favorite ? 'Add to' : 'Remove from'}
          <HeartIcon />
        </BtnFavorite>
      </BtnWrapper>
      <ModalBtnClose closeModal={closeModal} />
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
  closeModal: PropTypes.func.isRequired,
  toggleFavourites: PropTypes.func.isRequired,
  isLoadingAdd: PropTypes.bool.isRequired,
  isLoadingRemove: PropTypes.bool.isRequired,
};
