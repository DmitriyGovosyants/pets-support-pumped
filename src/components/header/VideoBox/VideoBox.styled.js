import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const VideoWrapper = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0px auto;

  border-radius: 20px;
  box-shadow: 4px 4px 10px ${p => p.theme.colors.dark};
  overflow: hidden;

  ${device.tablet} {
    max-width: 704px;
  }
`

export const Video = styled.video`
  display: block;
  width: 100%;
`