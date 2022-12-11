import petVideo from 'data/video/caring-for-your-pet.mp4';
import { ModalBtnClose } from 'components';
import { VideoWrapper, Video } from './VideoBox.styled';

export const VideoBox = ({ closeModal }) => {
  return (
    <VideoWrapper>
      <Video autoPlay controls>
        <source src={petVideo} type="video/mp4" />
        Your browser does not support the <code>video</code> element.
      </Video>
      <ModalBtnClose closeModal={closeModal} />
    </VideoWrapper>
  );
};
