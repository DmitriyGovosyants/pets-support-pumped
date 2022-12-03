import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';

export const PetsDataStyled = styled.div`
  ${device.desktop} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const PetsDataHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};

  ${device.tablet} {
    font-size: 28px;
  }
`;
