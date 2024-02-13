import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Input = styled.input`
  width: 350px;
  padding: 10px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 5px;
  background: transparent;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  outline: none;

  &:hover,
  &:focus {
    box-shadow: 0 0 8px 1px #f3f3f2;
    transition: all var(--transition);
  }
`;

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  padding: 10px 10px;
  border-radius: 3px;
  background-color: transparent;
  color: var(--main-color);
  border: 0;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  font-size: 20px;
  min-width: 150px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    box-shadow: 0 0 8px 1px #f3f3f2;
    transition: all var(--transition);
  }
`;
