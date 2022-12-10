import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0px auto;
  padding: 40px 20px;

  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: 20px;

  ${device.tablet} {
    max-width: 608px;
    padding: 40px 80px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-size: 24px;
  line-height: 1.375;
  text-align: center;
  color: ${p => p.theme.colors.textMain};

  ${device.tablet} {
    font-weight: 600;
    font-size: 36px;
    color: ${p => p.theme.colors.black};
  }
`;

export const Form = styled.form`
  & input {
    width: 100%;
    padding: 11px 14px;

    font-weight: 400;
    font-size: 16px;
    line-height: 1.35;

    background-color: ${p => p.theme.colors.bgMain};
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;

    ::placeholder {
      font-size: 14px;
      line-height: 1.35;
      color: ${p => p.theme.colors.placeholder};
    }

    :focus {
      outline: 1px solid ${p => p.theme.colors.accent};
    }

    ${device.tablet} {
      padding: 11px 16px;
      font-size: 20px;

      ::placeholder {
        font-size: 16px;
        line-height: 1.625;
      }
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: ${p => (p.last ? '40px' : '16px')};

  ${device.tablet} {
    margin-bottom: ${p => (p.last ? '40px' : '28px')};
  }
`;

export const Label = styled.label`
  display: grid;
  gap: 8px;

  font-size: 18px;
  line-height: 1.44;
  color: ${p => p.theme.colors.black};

  ${device.tablet} {
    gap: 12px;

    font-size: 24px;
    line-height: 1.08;
  }
`;

export const LabelAboveInput = styled(Label)`
  text-align: ${p => (p.center ? 'center' : 'start')};
  margin-bottom: 8px;

  ${device.tablet} {
    margin-bottom: 12px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 11px 14px;

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
    padding: 16px 18px;
    font-size: 20px;

    ::placeholder {
      font-size: 16px;
      line-height: 1.625;
    }
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${device.tablet} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 20px;
  }
`;
