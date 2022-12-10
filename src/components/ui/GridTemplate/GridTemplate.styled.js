import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;