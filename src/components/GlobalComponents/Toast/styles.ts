import styled from 'styled-components';
type ToastContainerProps = {
  isOpenToast?: boolean;
  ThisColor: string;
};
export const ToastContainer = styled.div<ToastContainerProps>`
  position: fixed;
  top: 25px;
  right: 30px;
  z-index: 999999999999;
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.white};
  padding: 20px 35px 20px 25px;
  border-left: 4px solid ${props => props.ThisColor};
  overflow: hidden;
  display: ${props => (props.isOpenToast ? 'block' : 'none')};
  opacity: ${props => (props.isOpenToast ? '1' : '0')};
  opacity: ${props => (props.isOpenToast ? 'auto' : 'none')};
  animation: ${props => (props.isOpenToast ? 'show_toast 1s ease forwards' : 'hide_toast 1s ease forwards;')};
  > button {
    background: none;
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
  @keyframes show_toast {
    0% {
      transform: translateX(100%);
    }
    40% {
      transform: translateX(-10%);
    }
    80% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-10%);
    }
  }

  @keyframes hide_toast {
    0% {
      transform: translateX(-10%);
    }
    40% {
      transform: translateX(0%);
    }
    80% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
export const ToastContent = styled.div<ToastContainerProps>`
  display: flex;
  align-items: center;
  > div {
    &:first-child {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      background-color: ${props => props.ThisColor};
      svg {
        fill: ${({ theme }) => theme.white};
        width: 25px;
      }
    }
  }
`;
export const ToastMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  span {
    &:first-child {
      color: ${({ theme }) => theme.textColor};
      font-weight: 600;
    }
  }
`;

export const ToastProgress = styled.div<ToastContainerProps>`
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 3px;
  width: 100%;
  background: #ddd;
  &::before {
    content: '';
    position: absolute;
    bottom: 0px;
    right: 0px;
    background-color: ${props => props.ThisColor};
    width: 100%;
    height: 100%;
    animation: progressBar 5s linear forwards;
    @keyframes progressBar {
      100% {
        right: 100%;
      }
    }
  }
`;
