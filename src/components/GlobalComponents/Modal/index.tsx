import { ReactNode } from 'react';

import { ModalContainer, ModalContent, ModalHeader } from './styles';
import XCircle from '../../../assets/icons/bx-x-circle.svg';
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  closeMethod: Function;
}

export function Modal({ children, isOpen, closeMethod }: ModalProps) {
  function handlerCloseModal() {
    closeMethod();
  }
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <span>Silvia Viegas is following</span>
          <button onClick={handlerCloseModal}>
            <XCircle />
          </button>
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalContainer>
  );
}
