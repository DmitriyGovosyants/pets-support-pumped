import { useState } from 'react';
import { Container, Modal, ModalTeam } from 'components';
import {
  FooterStyles,
  TextWrapper,
  Text,
  TextAccent,
  StyledFavouriteIcon,
} from './Footer.styled';

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <FooterStyles>
      <Container>
        <TextWrapper>
          <Text>
            ©2022 - Pe<TextAccent>t</TextAccent>ly. All Rights Reserved.
          </Text>
          <Text onClick={() => setShowModal(true)} highlight>
            Developed with <StyledFavouriteIcon /> by GoIT Students.
          </Text>
        </TextWrapper>
        {showModal && (
          <Modal closeModal={() => setShowModal(false)} main>
            <ModalTeam closeModal={() => setShowModal(false)} />
          </Modal>
        )}
      </Container>
    </FooterStyles>
  );
};
