import styled from '@emotion/styled';

export const Photo = styled.img`
  width: 140px;
  margin-bottom: 10px;
  margin-right: 20px;
`;

export const CastName = styled.p`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const CastList = styled.ul`
  margin-left: 20px;
`;

export const CastItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Loader = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`;

export const NoCast = styled.p`
  margin-left: 20px;
`;
