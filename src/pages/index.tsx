import { Header } from '@/components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tweeter</title>
        <meta name="description" content="social network" />
        <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main></main>
      <footer></footer>
    </div>
  );
}
