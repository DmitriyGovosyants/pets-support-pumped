import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
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

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 30px 15px;
  max-width: 400px;

  background: ${p => p.theme.colors.bgSecond};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;

  ${device.tablet} {
    padding: 50px 80px;
    max-width: 608px;
  }
  ${device.desktop} {
    max-width: 618px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.366;
  text-align: center;
  color: ${p => p.theme.colors.textMain};

  ${device.tablet} {
    font-weight: 500;
    font-size: 36px;
  }
`;

export const Form = styled.form`
  & input {
    width: 100%;
    padding: 9px 59px 10px 13px;

    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;
    color: ${p => p.theme.colors.textMain};

    background-color: ${p => p.theme.colors.bgMain};
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;

    :hover,
    :focus {
      outline: none;
    }

    ${device.tablet} {
      padding: 13px 59px 12px 31px;

      font-size: 18px;
      line-height: 1.38;
    }
  }
`

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: ${p => p.last ? '40px' : '16px'};
`

export const EyeBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;

  ${device.tablet} {
    top: 15px;
  }
`;

export const BtnWrapper = styled.div`
  display: grid;
  gap: 16px;
`

export const Text = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: ${p=> p.theme.colors.textMain};
`;

export const FormNavLink = styled(NavLink)`
  margin-left: 3px;
  color: ${p => p.theme.colors.textLink};
  text-decoration: underline;
`;