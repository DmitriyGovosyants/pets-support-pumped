import styled from '@emotion/styled';
import { device, retina } from 'styles/mediaquery';
import { bgImgs } from 'data/img/formPage';

export const Container = styled.div`
  position: relative;
  padding: 20px 20px 20px 20px;
  height: 100%;
  min-height: calc(100vh - (${p => p.theme.header.mobileHeight}));
  background-image: url(${bgImgs.curveMobile1x});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100vw;

  ${retina} {
    background-image: url(${bgImgs.curveMobile2x});
  }

  ${device.tablet} {
    padding: 149px 20px 20px 20px;
    min-height: calc(100vh - (${p => p.theme.header.tabletAndDesktopHeight}));
    background-image: url(${bgImgs.curveTablet1x});

    ${retina} {
      background-image: url(${bgImgs.curveTablet2x});
    }
  }

  ${device.desktop} {
    padding: 60px 20px 20px 20px;
    background-image: url(${bgImgs.curveDesktop1x});

    ${retina} {
      background-image: url(${bgImgs.curveDesktop2x});
    }
  }
`;
