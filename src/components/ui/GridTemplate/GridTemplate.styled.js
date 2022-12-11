import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${p => p.mobGap ? p.mobGap : '32px 32px'};

  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${p => p.tabGap ? p.tabGap : '32px 32px'};
  }
  
  ${device.desktop} {
    grid-template-columns: repeat(${p => p.desCol ? p.desCol: '3'}, 1fr);
    gap: ${p => p.desGap ? p.desGap : '32px 32px'};
  }
`;