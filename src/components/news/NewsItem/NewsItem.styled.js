import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Line = styled.span`
  display: block;
  height: 4px;
  max-width: 200px;
  margin-bottom: 4px;

  background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
  border-radius: 40px;

  ${device.tablet} {
      max-width: 280px;
      height: 8px;
  }

  ${device.desktop} {
      max-width: 340px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  height: 66px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;
  white-space: pre-line;
  color: ${props => props.theme.colors.textMain};

  overflow: hidden;
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: rgba(17, 17, 17, 0.6);
`;

export const NewsText = styled.p`
  margin-bottom: 20px;
  height: 132px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  white-space: pre-line;
  text-overflow: ellipsis;
  color:  ${props => props.theme.colors.textThird};
  
  overflow: hidden;
`;

export const ReadMore = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-decoration: underline;
  color: ${props => props.theme.colors.accent};

  :hover,
  :focus {
    color: ${props => props.theme.colors.hover};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;