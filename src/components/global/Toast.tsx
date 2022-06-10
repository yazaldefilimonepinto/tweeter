import { ReactNode, useState } from 'react';
import styles from '@/styles/components/global/Toast.module.scss';
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
    closeToast(false);
  }
  if (isOpenToast) {
    setTimeout(handerToastClose, 5000);
  }

  // if (typeStatus == 0) {
  //   SetColor('hsla(0, 79%, 63%, 1)');
  // }

  // if (typeStatus == 1) {
  //   SetColor('hsla(145, 63%, 42%, 1)');
  // }

  return (
    <div className={styles.toastContainer}>
      <div className={styles.toastContent}>
        <div>
          <i className="bx bx-check-double" style={{ color: color, fontSize: '1.4rem' }}></i>
        </div>
        <div className={styles.toastMessage}>
          <span>{status}</span>
          <span>{message}</span>
        </div>
      </div>
      <button onClick={handerToastClose}>
        <i className="bx bx-x"></i>
      </button>
      <div className={styles.toastProgress} />
    </div>
  );
}
