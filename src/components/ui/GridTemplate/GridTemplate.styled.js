import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const GridList = styled.ul`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;

  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;