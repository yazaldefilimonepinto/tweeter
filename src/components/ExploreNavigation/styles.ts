import styled from 'styled-components';

export const ExploreNavigationContainer = styled.div`
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.radius};
  height: max-content;
  > ul {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem 0px;
    a {
      padding: 0.2rem 0.2rem 0.2rem 1.5rem;
      font-weight: ${({ theme }) => theme.bigFontWidth};
      color: ${({ theme }) => theme.grayColor2};
      position: relative;
      &::before {
        position: absolute;
        left: 0px;
        content: '';
        display: none;
        width: 0.3rem;
        height: 100%;
        background-color: ${({ theme }) => theme.firstColor};
        border-radius: 0px 5px 5px 0px;
      }
      &:first-child {
        color: ${({ theme }) => theme.firstColor};
        &::before {
          display: block;
        }
      }
    }
  }
`;
