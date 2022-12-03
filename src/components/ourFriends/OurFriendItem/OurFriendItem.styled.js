import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Card = styled.li`
  padding: 12px 4px;

  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: 20px;
  box-shadow: 7px 4px 14px ${p => p.theme.colors.shadow};

  transition: box-shadow ${p => p.theme.animation.cubicBezier};

  :hover,
  :focus {
    box-shadow: 14px 10px 14px ${p => p.theme.colors.shadow};
  }

  ${device.tablet} {
    padding: 16px 16px 16px 4px;
    border-radius: 40px;
  }
`;

export const FriendTitle = styled.h2`
  margin-bottom: 12px;

  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  text-align: center;
  text-decoration-line: underline;
  color: ${p => p.theme.colors.accent};

  transition: color ${p => p.theme.animation.cubicBezier};

  :hover,
  :focus {
    color: ${p => p.theme.colors.hover};
  }

  ${device.tablet} {
    min-height: 44px;
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 1.375;
  }

  ${device.desktop} {
    min-height: 54px;

    font-size: 20px;
    line-height: 1.35;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
`

export const ImgWrapper = styled.div`
  flex: 0 0 110px;

  ${device.tablet} {
    flex: 0 0 120px;
  }

  ${device.desktop} {
    flex: 0 0 158px;
  }
`

export const InfoList = styled.ul`
  margin-left: 12px;

  ${device.tablet} {
    margin-left: 14px;
  }

  ${device.desktop} {
    margin-left: 16px;
  }
`

export const InfoItem = styled.li`
  position: relative;
  font-size: 12px;
  line-height: 1.33;
  color: ${p => p.theme.colors.black};

  :not(:last-of-type) {
    margin-bottom: 4px;
  }

  ${device.tablet} {
    font-size: 14px;
    line-height: 1.35;

    :not(:last-of-type) {
      margin-bottom: 8px;
    }
  }

  ${device.desktop} {
    font-size: 16px;
    line-height: 1.375;

    :not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
`

export const AddressLink = styled.a`
  text-decoration: ${p => p.underline ? 'underline' : 'none'};
  
  transition: color ${p => p.theme.animation.cubicBezier};

  :hover,
  :focus {
    color: ${p => p.theme.colors.hover};
  }
`

export const TimeBtn = styled.button`
  text-align: start;
  cursor: ${p => p.disabled ? 'default' : 'pointer'};

  :hover,
  :focus {
    color: ${p => p.disabled ? 'inherit' : p.theme.colors.hover};
  }
`

export const TimeDetails = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transform: translateY(4px);

  display: grid;
  row-gap: 4px;
  padding: 12px;

  font-size: 12px;
  line-height: 1.33;

  background: ${p => p.theme.colors.bgSecond};
  border: 1px solid ${p => p.theme.colors.accent};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  ${device.tablet} {
    transform: translateY(8px);
  }

  ${device.desktop} {
    transform: translateY(12px);
  }
`

export const TimeDetailsItem = styled.li`
  display: grid;
  grid-template-columns: 20px 80px;
  column-gap:12px;
`