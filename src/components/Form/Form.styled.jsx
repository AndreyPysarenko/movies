import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 350px;
  padding: 10px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #191d1e;
  font-weight: 600;
  font-size: 20px;

  outline: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #303f9f;
    border: 1px solid #303f9f;
  }
`;

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  padding: 10px 10px;
  border-radius: 3px;
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
