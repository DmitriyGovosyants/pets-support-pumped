import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;

  font-size: 18px;
  line-height: 1.44;
  color: ${p => p.theme.colors.black};
  text-align: ${p => p.centered ? 'center' : 'start'};
  
  ${device.tablet} {
    margin-bottom: 12px;

    font-size: 24px;
    line-height: 1.08;
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: ${p => p.centered ? '208px' : '116px'};
  height: ${p => p.centered ? '208px' : '116px'};
  margin: 0 auto;
  margin: ${p => p.centered ? '0 auto' : 0};
  
  border-radius: 20px;
  background-color: ${p => p.theme.colors.bgMain};

  ${device.tablet} {
    width: ${p => p.centered ? '182px' : '140px'};
    height: ${p => p.centered ? '182px' : '140px'};
  }
`

export const Input = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  cursor: pointer;

  background-color: ${p => p.theme.colors.bgMain};
  border-radius: 20px;
`

export const PlusImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`

export const LoadImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${p => p.centered ? '208px' : '116px'};
  height: ${p => p.centered ? '208px' : '116px'};
  border-radius: 20px;
  object-fit: cover;
  pointer-events: none;

  ${device.tablet} {
    width: ${p => p.centered ? '182px' : '140px'};
    height: ${p => p.centered ? '182px' : '140px'};
  }
`