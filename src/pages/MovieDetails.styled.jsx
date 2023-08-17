import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  margin-bottom: 15px;
  padding-left: 20px;
  display: block;
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  align-items: center;

  padding-left: 20px;
  padding-bottom: 20px;

  margin-bottom: 20px;

  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Poster = styled.img`
  width: 180px;
  height: auto;
  margin-right: 15px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 15px;
`;

export const Description = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
`;

export const MovieGenres = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  font-size: 14px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const AddInfo = styled.p`
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const AddInfoItem = styled(Link)`
  color: black;

  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const Marker = styled.span`
  margin-left: 25px;
  margin-right: 3px;
`;

export const InfoItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const InfoList = styled.ul`
  padding-bottom: 20px;
  margin-bottom: 20px;

  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Loader = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`;
