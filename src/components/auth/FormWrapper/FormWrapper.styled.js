import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 20px 10px;
  max-width: 400px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;

  ${device.tablet} {
    padding: 50px 80px;
    max-width: 608px;
  }
  ${device.desktop} {
    width: 618px;
  }
`;
