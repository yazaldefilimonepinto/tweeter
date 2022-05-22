import { lighten } from 'polished';
import styled from 'styled-components';
type ModalContainerProps = {
  isOpen: boolean;
};
export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 99999999;
  width: 100vw;
  height: 100vh;
  background-color: hsla(0, 7%, 97%, 0.229);
  align-items: center;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  transition: all 0.3s ease;
  justify-content: center;
  animation: activeModal 0.5s ease;

  @keyframes activeModal {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
export const ModalContent = styled.div`
  max-width: 50%;
  opacity: 1;
  background-color: ${props => props.theme.white};
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.6);
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem 0px 0.5rem;
  border-bottom: 2px solid ${props => props.theme.grayColor2};
  button {
    background: none;
  }
  span {
    font-size: ${props => props.theme.normalFontSize};
    font-weight: ${props => props.theme.normalFontWidth};
  }
`;
