import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import maleImg from 'data/img/male.png';
import femaleImg from 'data/img/female.png';
import plusImg from 'data/img/plus.png';
import { addNoticePageTwoSchema, handleUploadFile } from 'helpers';
import { MainButton } from 'components';
import {
  Form,
  TitleSex,
  RadioGroupSex,
  SexInput,
  LabelSex,
  SexImgWrapper,
  InputWrapper,
  Label,
  LabelAboveInput,
  FileLoadWrapper,
  FileInput,
  FilePlusImg,
  FileLoadImg,
  Textarea,
  ErrorBox,
  BtnBox,
} from './ModalAddNotice.styled';

const sexOptions = [
  { label: 'Male', value: 'male', img: maleImg },
  { label: 'Female', value: 'female', img: femaleImg },
];

export const ModalAddNoticePageTwo = ({
  formState,
  handleBackToPageOne,
  onSubmit,
  isLoading,
  avatar,
  setAvatar,
  setAvatarData,
}) => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addNoticePageTwoSchema),
    mode: 'onBlur',
    defaultValues: {
      sex: formState.sex || '',
      location: formState.location || '',
      price: formState.price || '',
      comments: formState.comments || '',
    },
  });

  const handleSavePageTwoData = () => {
    const values = getValues();
    handleBackToPageOne(values);
  };

  const handleFile = ({ target: { files } }) => {
    handleUploadFile(files[0], setAvatar, setAvatarData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TitleSex>The sex *</TitleSex>
      <RadioGroupSex>
        <Controller
          name="sex"
          control={control}
          render={({ field: { onChange, ...props } }) =>
            sexOptions.map(({ label, value, img }) => (
              <Fragment key={label}>
                <SexInput
                  {...props}
                  onChange={e => {
                    onChange(e.target.value);
                  }}
                  type="radio"
                  value={value}
                  id={value}
                  defaultChecked={formState.sex === value}
                />
                <LabelSex htmlFor={value}>
                  <SexImgWrapper>
                    <img src={img} alt={value} />
                  </SexImgWrapper>
                  {label}
                </LabelSex>
              </Fragment>
            ))
          }
        />
        <ErrorBox>{errors?.sex?.message}</ErrorBox>
      </RadioGroupSex>

      <InputWrapper>
        <Label>
          Location *
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <input {...field} type="text" placeholder="City, Region" />
            )}
          />
        </Label>
        <ErrorBox>{errors?.location?.message}</ErrorBox>
      </InputWrapper>

      {formState.category === 'sell' && (
        <InputWrapper>
          <Label>
            Price *
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Type price"
                  required={formState.category === 'sell'}
                />
              )}
            />
          </Label>
          <ErrorBox>{errors?.price?.message}</ErrorBox>
        </InputWrapper>
      )}

      <InputWrapper>
        <LabelAboveInput>Load the pet’s image</LabelAboveInput>
        <FileLoadWrapper>
          <FileInput
            type="file"
            name="avatar"
            onChange={handleFile}
            accept=".png, .jpeg, .jpg, .webp"
          />
          {!avatar && <FilePlusImg src={plusImg} alt="plus picture" />}
          {avatar && <FileLoadImg src={avatar} alt="photo of your pet" />}
        </FileLoadWrapper>
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
        <ErrorBox>{errors?.comments?.message}</ErrorBox>
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

ModalAddNoticePageTwo.propTypes = {
  formState: PropTypes.object.isRequired,
  handleBackToPageOne: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  setAvatar: PropTypes.func.isRequired,
  setAvatarData: PropTypes.func.isRequired,
};
