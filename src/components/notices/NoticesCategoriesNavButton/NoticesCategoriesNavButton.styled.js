import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  padding: 8px 26px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  background-color: ${props => props.theme.colors.textSecond};
  cursor: pointer;
  transition: color ${p => p.theme.animation.cubicBezier};
  transition: background-color ${p => p.theme.animation.cubicBezier};
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.textSecond};
  }
`;

export const StyledSelectedLink = styled(Link)`
  display: block;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  padding: 8px 26px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.textSecond};
  cursor: default;
  transition: color ${p => p.theme.animation.cubicBezier};
  transition: background-color ${p => p.theme.animation.cubicBezier};
`;
