import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { addPetPageTwoSchema } from 'helpers';
import { InputErrorBox, InputFile, MainButton } from 'components';
import {
  Form,
  InputWrapper,
  Label,
  Textarea,
  BtnBox,
} from './ModalEditPet.styled';

export const ModalEditPetPageTwo = ({
  formState,
  handleBackToPageOne,
  onSubmit,
  isLoading,
  avatar,
  setAvatar,
  setAvatarData,
  comments,
}) => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPetPageTwoSchema),
    mode: 'onBlur',
    defaultValues: {
      comments: formState.comments || comments,
    },
  });

  const handleSavePageTwoData = () => {
    const values = getValues();
    handleBackToPageOne(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <InputFile
          labelText={'Add photo and some comments'}
          centered={true}
          avatar={avatar}
          setAvatar={setAvatar}
          setAvatarData={setAvatarData}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>
          Comments *
          <Controller
            name="comments"
            control={control}
            render={({ field }) => (
              <Textarea {...field} placeholder="Type comments" rows={'3'} />
            )}
          />
        </Label>
        <InputErrorBox>{errors?.comments?.message}</InputErrorBox>
      </InputWrapper>

      <BtnBox>
        <MainButton
          disabled={isLoading}
          size="medium"
          width="fixed"
          type="submit"
        >
          Done
        </MainButton>
        <MainButton
          option="black"
          size="medium"
          width="fixed"
          onClick={handleSavePageTwoData}
        >
          Back
        </MainButton>
      </BtnBox>
    </Form>
  );
};

ModalEditPetPageTwo.propTypes = {
  formState: PropTypes.object.isRequired,
  handleBackToPageOne: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  setAvatar: PropTypes.func.isRequired,
  setAvatarData: PropTypes.func.isRequired,
};
