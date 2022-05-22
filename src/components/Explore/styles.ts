import styled from 'styled-components';

export const ExploreContainer = styled.div`
  /* background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.radius}; */
`;
export const ExploreRetweeted = styled.div`
  margin-bottom: 0.5rem;
  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.grayColor2};
    svg {
      fill: ${({ theme }) => theme.grayColor2};
      width: 25px;
    }
  }
`;

export const ExploreTweeterContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
