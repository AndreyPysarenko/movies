import styled from '@emotion/styled';

export const ListCast = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemCast = styled.li`
  box-shadow: 0 0 5px 1px #f3f3f2;
`;

export const TextCast = styled.p`
  max-width: 200px;
  margin: 10px 0;
  padding: 0 5px;
`;

export const Img = styled.img`
  width: 200px;
  height: 300px;

  object-fit: cover;
  object-position: center center;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;
