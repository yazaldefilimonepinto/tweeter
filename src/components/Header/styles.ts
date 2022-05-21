import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.shadow};
  overflow: hidden;
  height: 4rem;
  > div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  > div {
    width: 2rem;
    height: 2rem;
    > img {
      display: block;
      width: 100%;
      border-radius: ${props => props.theme.radius};
    }
  }
  > span {
    font-weight: ${props => props.theme.normalFontWidth};
  }
`;
export const HeaderLogo = styled.a`
  display: block;
`;
