import styled from '@emotion/styled';
import { device, size } from 'styles/mediaquery';

export const Container = styled.div`
  position: relative;
  margin: 0px auto;
  padding: 60px 20px 40px;
  max-width: 400px;

  background-color: ${props => props.theme.colors.bgMain};
  border-radius: 20px;

  ${device.tablet} {
    max-width: ${size.tablet};
  }
  ${device.desktop} {
    max-width: ${size.desktop};
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 2;
  color: ${p => p.theme.colors.accent};
  margin-bottom: 30px;

  ${device.tablet} {
    font-size: 50px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.bgSecond};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  transition: box-shadow ${p => p.theme.animation.cubicBezier};

  ${device.tablet} {
    padding: 16px;
    border-radius: 40px;
  }
  ${device.desktop} {
    &:hover,
    &:focus {
      box-shadow: 14px 10px 14px ${p => p.theme.colors.shadow};
    }
  }
`;

export const Img = styled.img`
  aspect-ratio: 1 / 1;
  width: 100%;
  margin-bottom: 10px;
  object-fit: cover;

  border-radius: 20px;

  ${device.tablet} {
    border-radius: 40px;
  }
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 36px;
  text-align: center;
`;

export const Position = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-size: 24px;
`;

export const WrapperSocial = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: center;
  gap: 10px;
`;
