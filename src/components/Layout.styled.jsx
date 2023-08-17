import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// export const Main = styled.main`
//   padding-left: 20px;
// `;

export const Header = styled.header`
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const NavStyled = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orangered;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Loader = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`;
