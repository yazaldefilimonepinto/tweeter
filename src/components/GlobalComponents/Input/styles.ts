import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 20px;
  position: relative;
  > input {
    display: block;
    height: 100%;
    width: 100%;
    &::placeholder {
      display: none !important;
      visibility: hidden !important;
    }
    border: none;
    background: none;
    font-size: ${props => props.theme.normalFontSize};
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
    &:valid ~ label,
    &:focus ~ label {
      transform: translateY(-5px);
      color: ${props => props.theme.firstColor};
      font-size: 13px;
    }
    &:valid ~ .underline::before,
    &:focus ~ .underline::after {
      transform: scaleX(1);
    }
  }
  > label {
    position: absolute;
    bottom: 10px;
    font-size: ${props => props.theme.normalFontSize};
    pointer-events: none;
    transition: all 0.3s ease;
  }
`;
export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
  &::before,
  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.firstColor};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }
`;
