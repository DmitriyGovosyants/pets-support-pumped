import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const UserDataTitle = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.textMain};

  ${device.tablet} {
    margin-bottom: 26px;
    font-size: 28px;
    line-height: 1.36;
  }

  ${device.desktop} {
    margin-bottom: 24px;
  }
`;

export const UserCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 12px 84px 16px;

  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);

  ${device.mobileOnly} {
    align-items: flex-end;
  }

  ${device.tablet} {
    margin-left: -32px;
    border-radius: 0px 40px 40px 0px;
    padding: 24px 40px 24px 32px;
  }

  ${device.tabletOnly} {
    flex-direction: row-reverse;
    justify-content: start;
  }

  ${device.desktop} {
    min-width: 420px;
    align-items: flex-end;
    margin-left: -16px;
    padding: 20px 16px 103px 16px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  ${device.mobileOnly} {
    padding: 0 11px 0 8px;
    margin-bottom: 34px;
  }

  ${device.tabletOnly} {
    flex-shrink: 0;
  }

  ${device.notDesktop} {
    flex-direction: column;
  }

  ${device.desktop} {
    margin-bottom: 32px;
  }
`;

export const UserAvatar = styled.img`
  width: 233px;
  height: 233px;
  object-fit: cover;

  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 50%;

  ${device.mobileOnly} {
    margin-bottom: 12px;
  }

  ${device.tabletOnly} {
    margin-bottom: 8px;
  }
`;

export const AvatarForm = styled.form`
  position: relative;
  width: 86px;
  height: 22px;

  ${device.desktop} {
    margin-left: -13px;
  }
`;

export const UploadLabel = styled.label`
  display: flex;
  gap: 2px;

  font-size: 12px;
  line-height: 1.8;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.textMain};
`;

export const UploadInput = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  width: 100%;
  height: 100%;

  font-size: 0;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
`;

export const BtnBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  float: right;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.bgMain};
  border-radius: 50%;
  cursor: pointer;

  ${device.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const UserDataList = styled.ul`
  width: 100%;
  ${device.tabletOnly} {
    padding-top: 16px;
    margin-right: 40px;
  }
`;
