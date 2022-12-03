import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const SectionStyled = styled.section`
  padding: 31px 0 50px 0;

  ${device.tablet} {
    padding: 72px 0 50px 0;
  }
  ${device.desktop} {
    padding: 41px 0 100px 0;
  }
`;
