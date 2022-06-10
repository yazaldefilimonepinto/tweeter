import { Toast } from '@/components/global/Toast';
import { Header } from '@/components/Header';
import Head from 'next/head';
import { ReactNode, useState } from 'react';
type WrapperProps = {
  children: ReactNode;
};
export default function Wrapper({ children }: WrapperProps) {
  const [isOpenToast, closeToast] = useState(true);
  return (
    <div>
      <Head>
        <title>Tweeter</title>
      </Head>
      <Header />

      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
