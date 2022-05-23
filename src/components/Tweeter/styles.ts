import styled from 'styled-components';

export const TweeterContainer = styled.section`
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.radius};
  padding: 0.8rem;
`;

export const TweeterHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;
export const TweeterHeaderProfile = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: ${({ theme }) => theme.radius};
  > img {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radius};
  }
`;
export const TweeterHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  > span {
    font-weight: ${({ theme }) => theme.normalFontWidth};
    color: ${({ theme }) => theme.grayColor2};
  }
`;

export const TweeterContent = styled.div`
  > p {
    max-width: 90%;
    padding: 1rem 0.5rem;
  }
  > div {
    width: 100%;
    border-radius: ${({ theme }) => theme.radius};
    max-height: 450px;
    > img {
      border-radius: ${({ theme }) => theme.radius};
      max-height: 400px;
      /* object-fit: fill; */
      object-position: center;
      object-fit: cover;
      user-select: none;
      pointer-events: none;
      cursor: default;
    }
  }
`;
export const TweeterFooter = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TweeterReact = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 0px;
  gap: 1.5rem;
  @media screen and (max-width: 450px) {
    justify-content: space-around;
  }
  > span {
    color: ${({ theme }) => theme.grayColor2};

    @media screen and (max-width: 450px) {
      font-size: ${({ theme }) => theme.smallFontSize};
    }
  }
`;
export const TweeterReactAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.2rem 0px;
  border-top: 1px solid ${({ theme }) => theme.grayColorAlt};
  border-bottom: 1px solid ${({ theme }) => theme.grayColorAlt};
  margin-bottom: 1rem;

  > button {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radius};
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    min-width: 130px;
    @media screen and (max-width: 880px) {
      > span {
        display: none;
      }
      min-width: 70px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.grayColorAlt};
    }
  }
`;

export const TweeterCommentContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 0.4rem;
`;
export const TweeterComment = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  place-items: center;
  background-color: ${({ theme }) => theme.grayColorAlt2};
  border-radius: ${({ theme }) => theme.radius};
  border: 2px solid ${({ theme }) => theme.grayColorAlt};
  height: 3rem;
  > textarea {
    resize: none;
    height: 90%;
    border-radius: ${({ theme }) => theme.radius};
    background: none;
    width: 100%;
    padding: 0.5rem;
  }
  > button {
    background: none;
    width: max-content;
    padding: 0.5rem;
    > svg {
      width: 25px;
      fill: ${({ theme }) => theme.grayColor3};
    }
  }
`;
