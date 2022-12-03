import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  margin-top: 40px;
`;

export const InputWrapper = styled.div`
  position: relative;
`

export const EyeBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;

  ${device.tablet} {
    top: 15px;
  }
`;