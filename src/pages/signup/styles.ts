import { lighten } from 'polished';
import styled from 'styled-components';

export const SignUpContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SignUpContainer = styled.section`
  background-color: ${props => props.theme.white};
  border-radius: 5px;
  /* max-width: 800px; */
  padding: 25px 40px 25px 40px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  > form {
    padding: 30px 0 0 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    @media screen and (max-width: 653px) {
      gap: 2rem;
      grid-template-columns: 100%;
    }
  }
`;

export const SignRow = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 653px) {
    gap: 2rem;
  }
  gap: 1.5rem;
  :nth-child(7) {
    grid-column: 1/-1;
  }

  button[type='submit'] {
    max-width: 200px;
    padding: 0.8rem 1rem;
    background-color: ${props => props.theme.firstColor};
    font-weight: ${props => props.theme.bigFontWidth};
    font-size: ${props => props.theme.h1FontSize};
    color: ${props => lighten(0.29, props.theme.firstColor)};
    border-radius: 2px;
    transition: all 0.3s ease;
    :hover {
      background-color: ${props => lighten(0.08, props.theme.firstColor)};
    }
  }
  .textarea {
    height: 70px;
    padding: 0px 20px;
    position: relative;
    textarea {
      resize: none;
      display: block;
      height: 100%;
      width: 100%;
      border: none;
      padding-top: 20px;
      background: none;
      font-size: ${props => props.theme.normalFontSize};
      border-bottom: 2px solid rgba(0, 0, 0, 0.12);
      &:valid ~ label,
      &:focus ~ label {
        transform: translateY(-20px);
        color: ${props => props.theme.firstColor};
        font-size: 14px;
      }
      &:valid ~ .underline::before,
      &:focus ~ .underline::after {
        transform: scaleX(1);
      }
    }
  }
  label {
    position: absolute;
    bottom: 40px;
    font-size: ${props => props.theme.normalFontSize};
    pointer-events: none;
    transition: all 0.3s ease;
  }
`;
export const SignUpLogo = styled.div`
  margin: 1rem 0px 2rem 0px;
`;
