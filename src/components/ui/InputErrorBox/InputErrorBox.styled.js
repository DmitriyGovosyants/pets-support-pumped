import styled from "@emotion/styled"
import { device } from "styles/mediaquery"

export const ErrorBox = styled.p`
  padding: 0 15px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  color: ${p => p.theme.colors.accent};

  ${device.tablet} {
    font-size: 18px;
    line-height: 1.38;
  }
`