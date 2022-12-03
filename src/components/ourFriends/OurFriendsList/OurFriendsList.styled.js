import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const FriendsList = styled.ul`
  display: grid;
  gap: 12px;

  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
