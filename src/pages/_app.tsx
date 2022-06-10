import { AppProps } from 'next/app';
import '@/styles/main/global.scss';
import Wrapper from '@/components/Wrapper';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
