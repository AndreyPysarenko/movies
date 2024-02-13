import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  margin-bottom: 30px;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 14px 0;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  width: 92px;
  height: 40px;
  color: var(--main-color);
  text-shadow: 0px 4px 4px rgba(250, 250, 250, 0.25);
  padding: 10px 10px;
  position: relative;
  z-index: 0;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    opacity: 0.5;
    height: 100%;
    width: 2px;
    content: '';
    background: var(--main-color);
    transition: all 0.3s;
  }

  &::before {
    left: 0px;
    top: 0px;
  }

  &::after {
    right: 0px;
    bottom: 0px;
  }

  &:hover&::before,
  &:hover&::after,
  &:focus&::before,
  &:focus&::after {
    opacity: 1;
    height: 2px;
    width: 100%;
  }
`;
