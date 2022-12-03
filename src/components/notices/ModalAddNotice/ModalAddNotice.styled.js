import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const ModalCard = styled.form`
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
`

export const FormTitle = styled.h2`
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
`

export const FormText = styled.p`
  margin-bottom: 20px;

  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${p => p.theme.colors.textMain};

  ${device.tablet} {
    font-size: 20px;
    line-height: 1.35;
    color: ${p => p.theme.colors.black};
  }
`

export const SelectCategory = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 12px;
  margin-bottom: 32px;

  ${device.tablet} {
    column-gap: 12px;
    row-gap: 16px;
  }
`

export const CategoryInput = styled.input`
  display: none;
`

export const CategoryLabel = styled.label`
  padding: 6px 26px;

  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};

  background-color: transparent;
  border-radius: 40px;
  border: 2px solid ${p => p.theme.colors.accent};
  cursor: pointer;

  transition: color ${p => p.theme.animation.cubicBezier},
   background-color ${p => p.theme.animation.cubicBezier},
   border-color ${p => p.theme.animation.cubicBezier};

  input:checked + & {
    color: ${p => p.theme.colors.textSecond};
    background-color: ${p => p.theme.colors.accent};;
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.textSecond};
    background-color: ${p => p.theme.colors.hover};;
    border: 2px solid ${p => p.theme.colors.hover};
  }

  ${device.tablet} {
    font-size: 20px;
  }
`

export const InputList = styled.ul`
  display: grid;
  gap: 16px;

  ${device.tablet} {
    gap: 28px;
  }
`

export const InputItem = styled.li`
  
`

export const FormInputLabel = styled.p`
  margin-bottom: ${p => p.indent === 'big' ? '16px' : '8px'};

  font-size: 18px;
  line-height: 1.44;
  color: ${p => p.theme.colors.black};

  ${device.tablet} {
    margin-bottom: ${p => p.indent === 'big' ? '28px' : '12px'};
    font-size: 24px;
    line-height: 1.08;
  }
`

export const RequiredSymbol = styled.span`
  color: ${p => p.theme.colors.accent};
`

export const FormInput = styled.input`
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
`

export const FormTextarea = styled.textarea`
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
`

export const FormInputLoadWrapper = styled.div`
  position: relative;
  width: 116px;
  height: 116px;
  
  border-radius: 20px;
  background-color: ${p => p.theme.colors.bgMain};

  ${device.tablet} {
    width: 140px;
    height: 140px;
  }
`

export const FormInputLoadPlus = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`

export const FormInputLoadImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 116px;
  height: 116px;
  border-radius: 20px;
  object-fit: cover;
  pointer-events: none;

  ${device.tablet} {
    width: 140px;
    height: 140px;
  }
`

export const FormInputLoad = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  cursor: pointer;

  background-color: ${p => p.theme.colors.bgMain};
  border-radius: 20px;
`

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
`

export const SelectSex = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 32px;
`

export const SexInput = styled.input`
  display: none;
`

export const SexLabel = styled.label`
  font-size: 18px;
  line-height: 1.44;
  color: ${p => p.theme.colors.black};

  cursor: pointer;

  transition: color ${p => p.theme.animation.cubicBezier};

  input:checked + & {
    color: ${p => p.theme.colors.accent};
  }

  ${device.tablet} {
    font-size: 20px;
    line-height: 1.3;
  }
`

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-bottom: 12px;

  ${device.tablet} {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`