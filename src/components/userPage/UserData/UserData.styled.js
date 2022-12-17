import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

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
`;

export const MainWrap = styled.div`
  width: 100%;

  ${device.tabletOnly} {
    margin-right: 52px;
  }

  & input {
    width: 140px;
    height: 25px;
    margin-right: 8px;
    padding: 4px 4px;

    font-weight: 400;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: ${p => p.theme.colors.textMain};

    background-color: ${p => p.theme.colors.bgMain};

    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    
    :focus {
      outline: none;
    }
    :disabled {
      background-color: ${p => p.theme.colors.bgSecond};
      border: 1px solid ${p => p.theme.colors.bgSecond};
    }

    ${device.tablet} {
      width: 230px;
      padding: 4px 12px;
      font-size: 18px;
      line-height: 1.39px;
    }
  }
`

export const Label = styled.label`
  width: 100%;

  color: ${p => p.theme.colors.black};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.44;

  ${device.tablet} {
    font-size: 18px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${p => p.first ? '0' : '8px'};
`;

export const EditBtn = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${p => p.theme.colors.textMain};
  background-color: ${p => p.theme.colors.bgMain};
  border-radius: 50%;
  cursor: pointer;
  transition: color ${p => p.theme.animation.cubicBezier},
   background-color ${p => p.theme.animation.cubicBezier};

  :hover,
  :focus {
    color: ${p => p.theme.colors.textSecond};
    background-color: ${p => p.theme.colors.accent};
  }

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

export const SubmitBtn = styled(EditBtn)`
  color: ${p => p.theme.colors.textSecond};
  background-color: ${p => p.theme.colors.accent};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hover};
  }
`

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  ${device.mobileOnly} {
    margin-bottom: 34px;
    margin-left: auto;
    margin-right: auto;
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
  flex-shrink: 1;

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
  position: relative;
  display: flex;
  gap: 4px;

  font-size: 16px;
  line-height: 1.66;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.textMain};

  cursor: pointer;
  outline: none;

  ${device.notDesktop} {
    width: 100%;
    justify-content: flex-end;
  }

  ${device.desktop} {
    min-width: 120px;
  }

  & svg {
    fill: ${p => p.theme.colors.accent};
  }
`;

export const UploadInput = styled.input`
  width: 0;
  height: 32px;
  visibility: hidden;
`;

export const BtnBox = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-around;
  align-items: center;

  ${device.desktop} {
    min-width: 120px;
  }
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  color: ${p => p.theme.colors.accent};

  background-color: ${p => p.theme.colors.bgMain};
  border-radius: 50%;
  cursor: pointer;
`;
