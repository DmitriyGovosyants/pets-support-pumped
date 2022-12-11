import { Modal, VideoBox } from 'components';
import { useState } from 'react';
import { LogoWrap, LogoAccent } from './Logo.styled';

export const Logo = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <LogoWrap onClick={() => setShowModal(true)}>
        pe<LogoAccent>t</LogoAccent>ly
      </LogoWrap>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <VideoBox closeModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
};
