import { AppProps } from 'next/app';
import '@/styles/main/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
