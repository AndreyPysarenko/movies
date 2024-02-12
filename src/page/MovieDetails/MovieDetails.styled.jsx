import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ContainerMovieInfo = styled.div`
  display: flex;
  margin: 25px;
  gap: 24px;
`;

export const ListGenres = styled.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;  
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0; 
`;

export const LinkInfo = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: #191d1e;

  &:hover {
    color: tomato;
  }
`;

export const GoBackLink = styled(NavLink)`
  text-decoration: none;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 8px 8px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  border: 0;

  cursor: pointer;
  font: inherit;
  font-weight: 600;
  font-size: 20px;
  min-width: 150px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #303f9f;
  }
`;
