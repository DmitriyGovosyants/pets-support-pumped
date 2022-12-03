import PropTypes from 'prop-types';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { ModalBtnClose } from 'components';
import team from 'data/json/team.json';
import {
  TeamList,
  TeamItem,
  TeamTitle,
  Img,
  MemberName,
  Position,
  WrapperSocial,
} from './ModalTeam.styled';

export const ModalTeam = ({ toggleModal }) => {
  return (
    <>
      <TeamTitle>Developers Team</TeamTitle>
      <TeamList>
        {team.map(
          ({ name, position, imageMember, socialLinkGit, socialLinkedLn }) => {
            return (
              <TeamItem key={socialLinkGit}>
                <Img src={imageMember} alt={name} />
                <MemberName>{name}</MemberName>
                <Position>{position}</Position>
                <WrapperSocial>
                  <a
                    href={socialLinkGit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub size={'40'} />
                  </a>
                  <a
                    href={socialLinkedLn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin size={'40'} color={'#2867B2'} />
                  </a>
                </WrapperSocial>
              </TeamItem>
            );
          }
        )}
      </TeamList>
      <ModalBtnClose toggleModal={toggleModal} />
    </>
  );
};

ModalTeam.propTypes = {
  toggleModal: PropTypes.func,
};
