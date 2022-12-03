import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const PetItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  background-color: ${p => p.theme.colors.bgSecond};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  ${device.tablet} {
    flex-direction: row;
    gap: 32px;
  }

  ${device.desktop} {
    padding-right: 28px;

    transform: scale(1);
    transition: transform ${p => p.theme.animation.cubicBezier};

    &:hover,
    &:focus {
      transform: scale(0.99);
    }
  }
`;

export const ThumbImage = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;

  ${device.tablet} {
    width: 161px;
    height: 161px;
  }
`;

export const Image = styled.img`
  min-width: 240px;
  height: 240px;
  border-radius: 40px;
  object-fit: cover;

  ${device.tablet} {
    min-width: 161px;
    height: 161px;
  }
`;

export const InfoList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

export const InfoRow = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};

  ${device.tablet} {
    font-size: 16px;
  }
`;

export const Info = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

export const ListButton = styled.ul`
  position: absolute;
  top: -3px;
  right: 0;

  display: flex;
  gap: 15px;

  ${device.tablet} {
    top: 0;
    right: 0;
  }
`;
