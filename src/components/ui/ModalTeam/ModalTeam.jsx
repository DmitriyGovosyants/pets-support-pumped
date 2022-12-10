import PropTypes from 'prop-types';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GridTemplate, ModalBtnClose } from 'components';
import devTeam from 'data/json/devTeam.json';
import qaTeam from 'data/json/qaTeam.json';
import { qaTeamImgs } from 'data/img/qaTeam';
import {
  Container,
  Title,
  Item,
  Img,
  Name,
  Position,
  WrapperSocial,
} from './ModalTeam.styled';

export const ModalTeam = ({ closeModal }) => {
  return (
    <Container>
      <Title>Developers Team</Title>
      <GridTemplate>
        {devTeam.map(({ name, position, image, GitLink, LinkedinLink }) => {
          return (
            <Item key={LinkedinLink}>
              <Img src={image} alt={name} />
              <Name>{name}</Name>
              <Position>{position}</Position>
              <WrapperSocial>
                <a href={GitLink} target="_blank" rel="noopener noreferrer">
                  <AiFillGithub size={'40'} />
                </a>
                <a
                  href={LinkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={'40'} color={'#2867B2'} />
                </a>
              </WrapperSocial>
            </Item>
          );
        })}
      </GridTemplate>
      <Title>QA Team</Title>
      <GridTemplate>
        {qaTeam.map(({ name, position, LinkedinLink }, index) => {
          return (
            <Item key={LinkedinLink}>
              <Img src={qaTeamImgs[index]} alt={name} />
              <Name>{name}</Name>
              <Position>{position}</Position>
              <WrapperSocial>
                <a
                  href={LinkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={'40'} color={'#2867B2'} />
                </a>
              </WrapperSocial>
            </Item>
          );
        })}
      </GridTemplate>
      <ModalBtnClose closeModal={closeModal} />
    </Container>
  );
};

ModalTeam.propTypes = {
  closeModal: PropTypes.func,
};
