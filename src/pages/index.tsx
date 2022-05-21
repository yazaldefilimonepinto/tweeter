import Head from 'next/head';

import 'aos/dist/aos.css';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tweeter | Social Network</title>
        <meta name="description" content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!" />
        <meta property="og:description" content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!" />
      </Head>
      <Header />
      <main className="container"></main>
    </>
  );
}
