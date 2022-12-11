import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Container = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0px auto;
  padding: 60px 20px 40px;

  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: 20px;

  ${device.tablet} {
    max-width: 704px;
    padding: 32px 20px;
  }
`;

export const Wrapper = styled.div`
  & + p {
    margin-bottom: 40px;
  }

  ${device.tablet} {
    display: grid;
    grid-template-columns: 288px 356px;
    gap: 20px;
    margin-bottom: 28px;

    & + p {
      margin-bottom: 32px;
    }
  }
`;

export const ImgWrapper = styled.div`
  position: relative;

  width: 240px;
  height: 240px;
  
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;

  ${device.mobileOnly} {
    margin: 0 auto 16px auto;
  }

  ${device.tablet} {
    width: 288px;
    height: 328px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CategoryMark = styled.span`
  position: absolute;
  top: 20px;
  left: 0;

  display: flex;
  align-items: center;
  min-height: 28px;
  min-width: 158px;
  padding-left: 20px;

  font-size: 12px;
  line-height: 1.375;
  letter-spacing: 0.04em;

  background-color: ${p => p.theme.colors.btnTransperent};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const FeaturesWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;
  word-wrap: break-word;

  ${device.tablet} {
    width: 90%;
    margin-bottom: 20px;

    font-size: 28px;
    line-height: 1.35;
  }
`;

export const List = styled.ul`
  margin-bottom: 28px;

  ${device.tablet} {
    margin-bottom: 0;
  }
`;

export const Item = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Label = styled.p`
  min-width: 118px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.35;
  color: ${p => p.theme.colors.black};

  ${device.tablet} {
    min-width: 120px;

    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.35;
  color: ${p => p.theme.colors.black};

  ${device.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ContactLink = styled.a`
  font-size: 14px;
  line-height: 1.35;
  color: ${p => p.theme.colors.black};
  overflow: hidden;
  word-wrap: break-word;

  transition: color ${p => p.theme.animation.cubicBezier};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  ${device.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const BtnWrapper = styled.div`
  ${device.tablet} {
    display: flex;
    flex-direction: row-reverse;
    padding-right: 20px;
  }
`;

export const ContactButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;
  margin-bottom: 12px;

  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.textSecond};
  text-align: center;

  background-color: ${p => p.theme.colors.accent};
  border-radius: 40px;
  transition: background-color ${p => p.theme.animation.cubicBezier};

  ${device.tablet} {
    width: 160px;
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hover};
  }
`;

export const BtnFavorite = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;

  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${p=> p.theme.colors.textMain};

  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;
  cursor: pointer;
  transition: border-color ${p => p.theme.animation.cubicBezier};

  & > svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;

    fill: ${p => p.theme.colors.accent};
    transition: fill ${p => p.theme.animation.cubicBezier};
  }

  ${device.tablet} {
    width: 160px;
    margin-right: 12px;
  }

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.hover};

    & > svg {
      fill: ${p => p.theme.colors.hover};
    }
  }
`;