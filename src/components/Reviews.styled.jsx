import styled from '@emotion/styled';

export const List = styled.ul`
  margin-left: 20px;
`;

export const Author = styled.span`
  font-weight: 700;
`;

export const Review = styled.p`
  margin-top: 15px;
  font-size: 14px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Marker = styled.span`
  margin-right: 3px;
`;

export const NoReview = styled.p`
  margin-left: 20px;
`;

export const Loader = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`;
