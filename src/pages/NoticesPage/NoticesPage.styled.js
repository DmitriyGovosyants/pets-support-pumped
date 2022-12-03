import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 30px;

  ${device.mobileOnly} {
    position: relative;
  }
  ${device.tablet} {
    margin-bottom: 60px;
  }
`;
