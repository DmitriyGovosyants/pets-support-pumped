import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const LogoutButton = styled.button`
  position: absolute;
  right: 12px;
  bottom: 20px;
  display: flex;
  align-items: center;
  width: 90px;
  height: 22px;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.39;
  letter-spacing: 0.04em;
  cursor: pointer;

  color: rgba(17, 17, 17, 0.6);

  ${device.tablet} {
    left: 0;
    bottom: 24px;
  }

  ${device.desktop} {
    left: 0;
    top: 585px;
  }
`;
