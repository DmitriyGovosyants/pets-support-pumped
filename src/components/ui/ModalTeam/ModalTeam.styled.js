import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const TeamTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.375;
  color: ${p => p.theme.colors.textSecond};
  text-decoration: underline;
  margin-bottom: 30px;

  ${device.tablet} {
    font-size: 50px;
  }
`;

export const TeamList = styled.ul`
  display: grid;
  gap: 30px;
  max-width: 300px;
  margin: 0 auto;

  ${device.tablet} {
    max-width: 700px;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  ${device.desktop} {
    max-width: 1000px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TeamItem = styled.li`
  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: 20px;

  ${device.tablet} {
    padding: 16px;
    border-radius: 40px;
  }
`;

export const Img = styled.img`
  width: 400px;
  margin-bottom: 10px;

  border-radius: 20px;

  ${device.tablet} {
    width: 450px;
    border-radius: 40px;
  }
  ${device.desktop} {
    width: 500px;
    border-radius: 40px;
  }
`;

export const MemberName = styled.p`
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
  justify-content: center;
  gap: 10px;
`;
