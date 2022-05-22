import styled from 'styled-components';

type HomeHeroBackGroundProps = {
  img: string;
};
export const Container = styled.div`
  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
`;
export const HomeHeroBackGround = styled.div<HomeHeroBackGroundProps>`
  height: 450px;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 -100px ${props => props.theme.grayColorAlt};
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const ProfileContainer = styled.section`
  position: relative;
  bottom: 0px;
  padding: 2rem;
  min-height: 200px;
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.white};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 1090px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`;
export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
`;

export const ProfileInformation = styled.section`
  margin-left: 11rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.6rem;
  @media screen and (max-width: 860px) {
    flex-direction: column;
    margin-top: 5rem;
    margin-left: 0px;
  }
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 860px) {
      flex-direction: column;
      gap: 0.5rem;
    }
    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    h2 {
      font-size: ${props => props.theme.biggestFontSize};
      font-weight: ${props => props.theme.bigFontWidth};
    }
    span {
      font-size: ${props => props.theme.normalFontSize};
      font-weight: ${props => props.theme.smallFontWidth};
    }
  }
  P {
    max-width: 45ch;
    font-size: ${props => props.theme.h1FontSize};
    font-weight: ${props => props.theme.normalFontWidth};
    color: ${props => props.theme.grayColor1};
    @media screen and (max-width: 860px) {
      text-align: center;
      margin-bottom: 1rem;
      max-width: 30ch;
    }
  }
`;
export const ProfileImg = styled.div`
  background-color: ${props => props.theme.grayColorAlt};
  padding: 2px;
  border-radius: ${props => props.theme.radius};
  position: absolute;
  top: -2.5rem;
  width: 10rem;
  height: 10rem;
  > img {
    height: 100%;
    border-radius: ${props => props.theme.radius};
    width: 100%;
  }
  @media screen and (max-width: 860px) {
    top: -3.5rem;
  }
`;
export const ButtonFollow = styled.button`
  background: none;
`;
