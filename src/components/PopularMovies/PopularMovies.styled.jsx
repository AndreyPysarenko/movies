import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0;
`;

export const Item = styled.li`
  &:hover,
  &:focus {
    transition: all 0.25s ease;
    transform: scale(1.05);
  }
`;

export const MovieLinkStyled = styled(NavLink)`
  font-weight: 600;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  color: var(--main-color);

  &:hover,
  &:focus {
    text-shadow: 0px 4px 4px rgba(250, 250, 250, 0.25);
    transition: all 0.25s ease;
  }
`;
