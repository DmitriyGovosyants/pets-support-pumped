import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.textMain};
`;
export const FormNavLink = styled(NavLink)`
  margin-left: 3px;
  color: ${props => props.theme.colors.textLink};
  text-decoration: underline;
`;
