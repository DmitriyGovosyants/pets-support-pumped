import PropTypes from 'prop-types';
import plusImg from 'data/img/plus.png';
import { handleUploadFile } from 'helpers';
import { Label, Wrapper, Input, PlusImg, LoadImg } from './InputFile.styled';

export const InputFile = ({
  labelText,
  centered = false,
  avatar,
  setAvatar,
  setAvatarData,
}) => {
  const handleFile = ({ target: { files } }) => {
    handleUploadFile(files[0], setAvatar, setAvatarData);
  };

  return (
    <>
      <Label centered={centered}>{labelText}</Label>
      <Wrapper centered={centered}>
        <Input
          type="file"
          name="avatar"
          onChange={handleFile}
          accept=".png, .jpeg, .jpg, .webp"
        />
        {!avatar && <PlusImg src={plusImg} alt="plus picture" />}
        {avatar && (
          <LoadImg centered={centered} src={avatar} alt="photo of your pet" />
        )}
      </Wrapper>
    </>
  );
};

InputFile.propTypes = {
  labelText: PropTypes.string.isRequired,
  centered: PropTypes.bool,
  avatar: PropTypes.string,
  setAvatar: PropTypes.func.isRequired,
  setAvatarData: PropTypes.func.isRequired,
};
