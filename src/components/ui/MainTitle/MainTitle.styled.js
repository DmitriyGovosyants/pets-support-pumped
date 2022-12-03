import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Title = styled.h1`
  margin-bottom: 28px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;

  ${device.tablet} {
    margin-bottom: 40px;
    font-size: 48px;
  }
`;
