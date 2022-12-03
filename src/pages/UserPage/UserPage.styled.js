import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const UserPageWrapper = styled.div`
  ${device.desktop} {
    display: flex;
    gap: 32px;
  }
`;

export const UserDataWrapper = styled.div`
  position: relative;

  ${device.mobileOnly} {
    margin-bottom: 40px;
  }
  
  ${device.tabletOnly} {
    margin-bottom: 20px;
  }
`;
