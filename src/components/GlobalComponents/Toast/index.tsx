import { ReactNode, useEffect, useState } from 'react';

import CheckCircle from '../../../assets/icons/bx-check-circle.svg';
import XCircle from '../../../assets/icons/bx-x-circle.svg';

import { ToastContainer, ToastProgress, ToastMessage, ToastContent } from './styles';

interface ToastProps {
  children?: ReactNode;
  isOpenToast: boolean;
  closeToast: Function;
  message?: string;
  status?: string;
  typeStatus: number;
}

export function Toast({ isOpenToast, closeToast, message, status, typeStatus }: ToastProps) {
  const [color, SetColor] = useState<string>('#2F80ED');
  function handerToastClose() {
    closeToast();
  }
  if (isOpenToast) {
    setTimeout(handerToastClose, 5000);
  }

  if (typeStatus == 0) {
    SetColor('hsla(0, 79%, 63%, 1)');
  }

  if (typeStatus == 1) {
    SetColor('hsla(145, 63%, 42%, 1)');
  }

  return (
    <ToastContainer isOpenToast={isOpenToast} ThisColor={color}>
      <ToastContent ThisColor={color}>
        <div>
          <CheckCircle />
        </div>
        <ToastMessage>
          <span>{status}</span>
          <span>{message}</span>
        </ToastMessage>
      </ToastContent>
      <button onClick={handerToastClose}>
        <XCircle />
      </button>
      <ToastProgress ThisColor={color} />
    </ToastContainer>
  );
}
