import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';
import { theme } from 'styles';

export const UserDataTitle = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.textMain};

  ${device.tablet} {
    margin-bottom: 26px;
    font-size: 28px;
    line-height: 1.36;
  }

  ${device.desktop} {
    margin-bottom: 24px;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  padding: 20px 14px 20px 14px;
  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);

  ${device.tablet} {
    padding: 24px 40px 24px 32px;
  }
  ${device.desktop} {
    min-width: 420px;
    padding: 20px 16px 40px 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 41px;

  ${device.mobileOnly} {
    align-items: flex-end;
  }

  ${device.tablet} {
    border-radius: 0px 40px 40px 0px;
  }

  ${device.tabletOnly} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  ${device.desktop} {
    margin-bottom: 41px;
  }
  & label + label {
    margin-top: 15px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 252px;
  height: 25px;

  color: ${p => p.theme.colors.black};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.44;

  ${device.tablet} {
    font-size: 18px;
  }

  ${device.tablet} {
    width: 100%;
  }

  & input {
    width: 140px;
    height: 25px;
    padding: 4px 4px;

    font-weight: 400;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: ${theme.colors.textMain};

    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.bgSecond : theme.colors.bgMain};

    border: 1px solid
      ${({ disabled, theme }) =>
        disabled ? theme.colors.bgSecond : 'rgba(245, 146, 86, 0.5)'};
    border-radius: 40px;

    ${device.tablet} {
      width: 230px;
      padding: 4px 12px;
      font-size: 18px;
      line-height: 1.39px;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;

  ${device.tablet} {
    justify-content: space-between;
    width: 290px;
  }
`;

export const InfoEditBtn = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${props =>
    props.focused ? theme.colors.accent : 'rgba(17, 17, 17, 0.6)'};
  background-color: ${theme.colors.bgMain};
  border-radius: 50%;
  cursor: pointer;
  transition: color ${theme.animation.cubicBezier};

  ${device.tablet} {
    width: 32px;
    height: 32px;
  }

  & > svg {
    width: 15px;
    height: 15px;
    ${device.tablet} {
      width: 20px;
      height: 20px;
    }
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  ${device.mobileOnly} {
    margin-bottom: 34px;
  }

  ${device.tabletOnly} {
    flex-shrink: 0;
  }

  ${device.notDesktop} {
    flex-direction: column;
  }

  ${device.desktop} {
    margin-bottom: 32px;
  }
`;

export const UserAvatar = styled.img`
  width: 233px;
  height: 233px;
  object-fit: cover;

  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 50%;

  ${device.mobileOnly} {
    margin-bottom: 12px;
  }

  ${device.tabletOnly} {
    margin-bottom: 8px;
  }
`;

export const UploadLabel = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;
  outline: none;

  & svg {
    position: absolute;
    left: 5px;
  }

  & p {
    position: absolute;
    left: 30px;
    font-size: 12px;
    line-height: 1.8;
    letter-spacing: 0.04em;
    color: ${p => p.theme.colors.textMain};
  }
`;

export const UploadInput = styled.input`
  width: 100px;
  height: 22px;
  visibility: hidden;
`;

export const BtnBox = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-around;
  align-items: center;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.bgMain};
  border-radius: 50%;
  cursor: pointer;

  ${device.tablet} {
    width: 32px;
    height: 32px;
  }
`;
