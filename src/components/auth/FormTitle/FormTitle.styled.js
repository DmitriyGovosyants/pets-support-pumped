import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  ${device.tablet} {
    font-weight: 500;
    font-size: 36px;
  }
`;
