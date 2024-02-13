import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ContainerMovieInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 20px;
`;

export const ImgMovie = styled.img`
  width: 300px;
  height: 450px;

  object-fit: cover;
  object-position: center center;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  box-shadow: 0 0 8px 1px #f3f3f2;
`;

export const ContainerDescription = styled.div`
  max-width: 700px;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const ListGenres = styled.ul`
  display: inline-flex;
  gap: 12px;
`;

export const ItemGenres = styled.li`
  display: flex;
  flex-shrink: 1;

  &:not(:first-child) {
    &:before {
      content: '';
      display: block;
      height: auto;
      width: 1px;
      background-color: var(--color-pagination);
      margin-right: 6px;
    }
  }
`;

export const TitleListInfo = styled.h3`
  font-weight: 600;
  font-size: 22px;
  margin: 20px 0;
  text-align: center;
`;

export const ListInfo = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const GoBackLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 20px;
  height: 40px;
  width: 140px;

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

export const SpanSvg = styled.span`
  width: 22px;
  height: 22px;
`;
