import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';
import petsTemplateMobile from 'data/img/user-pets-template-mobile.jpg';
import petsTemplateTablet from 'data/img/user-pets-template-tablet.jpg';

export const PetsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const EmptyTemplate = styled.div`
  height: 300px;
  padding-top: 10px;
  
  font-size: 18px;
  letter-spacing: 0.1em;
  color: ${p => p.theme.colors.textSecond};
  text-align: center;

  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ), url(${petsTemplateMobile});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 20px;

  ${device.tablet} {
    height: 400px;
    padding-top: 30px;
    font-size: 26px;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ), url(${petsTemplateTablet});
  }

  ${device.desktop} {
    height: 500px;
    border-radius: 40px;
  }
`