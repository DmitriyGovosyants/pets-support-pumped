import styled from '@emotion/styled';
import { device, size } from 'styles/mediaquery';

export const ContainerStyled = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};

  ${device.mobile} {
    width: ${size.mobile};
  }
  ${device.tablet} {
    width: ${size.tablet};
    padding-left: ${p => p.theme.spacing(8)};
    padding-right: ${p => p.theme.spacing(8)};
  }
  ${device.desktop} {
    width: ${size.desktop};
    padding-left: ${p => p.theme.spacing(4)};
    padding-right: ${p => p.theme.spacing(4)};
  }
`;
