import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SearchInput = styled.input`
  margin-right: 20px;

  width: 250px;

  padding: 8px 15px;

  &:hover,
  &:focus {
    border: 2px solid orangered;
  }
`;

export const Form = styled.form`
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: block;
  border: none;
  outline: none;
  width: 100px;
  height: 30px;

  border-radius: 5px;

  font-size: 14px;

  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const List = styled.ul`
  margin-left: 20px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const Marker = styled.span`
  margin-right: 3px;
`;

export const Loader = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`;
