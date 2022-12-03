import styled from "@emotion/styled";

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  padding: 9px;

  background-color: ${p => p.theme.colors.bgMain};
  backdrop-filter: blur(2px);
  border-radius: 50%;
  cursor: pointer;

  transition: background-color ${p => p.theme.animation.cubicBezier};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
`