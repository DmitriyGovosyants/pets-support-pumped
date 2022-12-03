import styled from "@emotion/styled"
import { device } from "styles/mediaquery"

export const Bird = styled.img`
  position: absolute;
  top: -30px;
  right: 0;
  z-index: 10;
  pointer-events: none;
  opacity: 0;

  width: 120px;

  animation-name: birdFly;
  animation-duration: 3000ms;
  animation-timing-function: linear;
  animation-delay: 3000ms;
  animation-iteration-count: 1;

  ${device.tablet} {
    width: 200px;
    animation-duration: 3000ms;
  }

  ${device.desktop} {
    animation-duration: 4500ms;
  }

  @keyframes birdFly {
    0% {transform: translateX(200%) rotate(20deg) translateY(-50%); opacity: 1;}
    100% {transform: translateX(-100vw) rotate(-20deg) translateY(50%); opacity: 1;}
  }
`