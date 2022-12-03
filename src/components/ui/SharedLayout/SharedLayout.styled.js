import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const FooterPressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - (${p => p.theme.header.mobileHeight}));

  ${device.tablet} {
    min-height: calc(100vh - (${p => p.theme.header.tabletAndDesktopHeight}));
  }
`;
