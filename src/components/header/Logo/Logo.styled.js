import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const LogoWrap = styled.p`
  display: inline;
  
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  color: ${p => p.theme.colors.textMain};

  user-select: none;

  ${device.tablet} {
    font-size: 32px;
  }
`;

export const LogoAccent = styled.span`
  color: ${p => p.theme.colors.accent};
`;