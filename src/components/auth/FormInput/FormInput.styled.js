import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  background: transparent;
`;

export const Error = styled.div`
  margin-bottom: 5px;
  color: red;
  margin-left: 30px;
  margin-top: -13px;
`;

export const Input = styled.input`
  ${device.mobileOnly} {
    width: 100%;
  }
  width: 280px;
  height: 40px;
  padding: 11px 60px 12px 14px;
  border-radius: 40px;
  border: 1px solid
    ${props => (props.isvalid ? 'rgba(245, 146, 86, 0.5)' : 'red')};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  color: ${props => props.theme.colors.textMain};
  :hover,
  :focus {
    outline: none;
  }
  ${device.tablet} {
    width: 458px;
    height: 52px;
    padding: 14px 60px 13px 32px;
    font-size: 18px;
    line-height: 1.38;
  }
`;
