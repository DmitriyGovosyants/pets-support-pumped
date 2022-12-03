import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const ModalWrap = styled.form`
  position: relative;
  max-width: 400px;
  margin: 0px auto;
  padding: 40px 20px;

  border-radius: 20px;
  background-color: ${props => props.theme.colors.bgSecond};

  ${device.tablet} {
    max-width: 608px;
    padding: 40px 80px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  padding: 9px;

  background-color: ${p => p.theme.colors.bgMain};
  backdrop-filter: blur(2px);
  border-radius: 50%;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;

  font-size: 24px;
  line-height: 1.37;
  text-align: center;
  color: ${p => p.theme.colors.textMain};

  ${device.tablet} {
    margin-bottom: 40px;
    font-size: 36px;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${p => p.theme.colors.textMain};

  ${device.tablet} {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;

  font-size: 18px;
  line-height: 1.4;
  color: ${p => p.theme.colors.textMain};

  :not(:first-of-type) {
    margin-top: 16px;
  }

  ${device.tablet} {
    margin-bottom: 12px;

    font-size: 24px;
    line-height: 1.08;

    :not(:first-of-type) {
      margin-top: 28px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 11px 14px;

  border-radius: 40px;
  background: ${p => p.theme.colors.bgMain};
  border: 1px solid rgba(245, 146, 86, 0.5);

  :not(:last-child) {
    margin-bottom: 2px;
  }

  :focus {
    outline-color: rgba(245, 146, 86, 0.5);
  }

  ${device.tablet} {
    padding: 11px 16px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;

  ${device.tablet} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 20px;
  }
`;

export const FormInputLoadWrapper = styled.div`
  position: relative;
  width: 208px;
  height: 208px;
  margin: 0 auto 20px auto;

  border-radius: 20px;
  background-color: ${p => p.theme.colors.bgMain};

  ${device.tablet} {
    width: 182px;
    height: 182px;
    margin: 0 auto 40px auto;
  }
`;

export const FormInputLoadPlus = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const FormInputLoadImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 208px;
  height: 208px;
  border-radius: 20px;
  object-fit: cover;
  pointer-events: none;

  ${device.tablet} {
    width: 182px;
    height: 182px;
  }
`;

export const FormInputLoad = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  cursor: pointer;

  background-color: ${p => p.theme.colors.bgMain};
  border-radius: 20px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  height: 100px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.35;

  background-color: ${p => p.theme.colors.bgMain};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  resize: none;

  ::placeholder {
    font-size: 14px;
    line-height: 1.35;
    color: ${p => p.theme.colors.placeholder};
  }

  :focus {
    outline: 1px solid ${p => p.theme.colors.accent};
  }

  ${device.tablet} {
    height: 116px;
    padding: 16px 18px;
    font-size: 20px;

    ::placeholder {
      font-size: 16px;
      line-height: 1.625;
    }
  }
`;
