import styled from "@emotion/styled";
import { device } from "styles/mediaquery";
import videoCursor from 'data/img/video-cursor.png';

export const LogoWrap = styled.p`
  display: inline;
  
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  color: ${p => p.theme.colors.textMain};
  cursor: url(${videoCursor}), auto;

  user-select: none;

  ${device.tablet} {
    font-size: 32px;
  }
`;

export const LogoAccent = styled.span`
  color: ${p => p.theme.colors.accent};
`;