import styled from '@emotion/styled';
import { size, device, retina } from 'styles/mediaquery';
import { bgImgs } from 'data/img/homePage';

export const BackgroundWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: calc(100vh - (${p => p.theme.header.mobileHeight}));
  background-image: url(${bgImgs.curveMobile1x});
  background-position: left 33% bottom -14px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 620px 470px;

  ${retina} {
    background-image: url(${bgImgs.curveMobile2x});
  }

  ${device.tablet} {
    height: calc(100vh - (${p => p.theme.header.tabletAndDesktopHeight}));

    background-image: url(${bgImgs.curveTablet1x});
    background-position: left 28% bottom -159.48px;
    background-size: 1572.76px 1267.48px;

    ${retina} {
      background-image: url(${bgImgs.curveTablet2x});
    }
  }

  ${device.desktop} {
    background-image: url(${bgImgs.bgdDesktop1x});
    background-position: bottom;
    background-size: 1379px 598px;

    ${retina} {
      background-image: url(${bgImgs.bgdDesktop2x});
    }
  }
`;

export const HomePageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding-top: 44px;
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};

  ${device.mobile} {
    width: ${size.mobile};
  }
  ${device.tablet} {
    width: ${size.tablet};
    padding-top: 72px;
    padding-left: ${p => p.theme.spacing(8)};
    padding-right: ${p => p.theme.spacing(8)};
  }
  ${device.desktop} {
    flex-direction: row;
    width: ${size.desktop};
    padding-top: 25px;
    padding-left: ${p => p.theme.spacing(4)};
    padding-right: ${p => p.theme.spacing(4)};
  }
`;

export const Title = styled.h1`
  z-index: 2;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.375;
  text-align: left;
  color: ${p => p.theme.colors.textMain};

  ${device.mobileOnly} {
    margin-bottom: 58px;
  }

  ${device.tablet} {
    max-width: 588px;
    font-size: 68px;
    line-height: 1.47;
  }

  ${device.tabletOnly} {
    margin-bottom: 100px;
  }

  ${device.desktop} {
    padding-top: 47px;
  }
`;

export const PictureStyled = styled.picture`
  z-index: 1;
  width: 320px;
  position: absolute;
  bottom: 0;

  ${device.mobileOnly} {
    margin: 0 -20px;
  }

  ${device.tablet} {
    width: 699px;
  }

  ${device.desktop} {
    left: 656px;
    width: 624px;
    margin-top: auto;
    margin-right: -16px;
  }
`;