import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Marker = styled.span`
  margin-right: 3px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const MoviesList = styled.ul`
  margin-left: 20px;
`;

export const Loader = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`;
