import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';

export const UserDescription = styled.li`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemTitle = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: ${theme.colors.textMain};

  ${device.tablet} {
    font-size: 18px;
    line-height: 1.39;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  width: 170px;
  margin-left: 20px;

  ${device.tablet} {
    min-height: 32px;
    width: 272px;
    margin-left: 24px;
    padding-left: 12px;
  }
`;

export const Info = styled.p`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};
  word-break: break-all;

  ${device.tablet} {
    font-size: 18px;
    line-height: 1.39;
  }
`;
export const InfoEditBtn = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  color: ${props =>
    props.disabled ? 'rgba(17, 17, 17, 0.6)' : theme.colors.accent};
  background-color: ${theme.colors.bgMain};
  border-radius: 50%;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  transition: color ${theme.animation.cubicBezier};

  ${device.tablet} {
    width: 32px;
    height: 32px;
    margin-left: 24px;
  }
`;

export const UserForm = styled.form`
  display: flex;
  align-items: center;
`;

export const UserInput = styled.input`
  display: flex;
  align-items: center;
  width: 160px;
  height: 24px;
  padding: 4px 18px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};

  background: ${theme.colors.bgMain};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  ${device.tablet} {
    width: 216px;
    height: 32px;
    padding: 4px 12px;
    font-size: 18px;
    line-height: 1.39px;
  }

  &:focus {
    outline: none;
  }
`;

export const UserSubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  color: ${theme.colors.accent};
  background-color: ${theme.colors.bgMain};
  border-radius: 50%;
  cursor: pointer;

  ${device.tablet} {
    width: 32px;
    height: 32px;
    margin-left: 24px;
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: ${p => p.theme.colors.accent};

  ${device.tablet} {
    font-size: 16px;
  }
`;
