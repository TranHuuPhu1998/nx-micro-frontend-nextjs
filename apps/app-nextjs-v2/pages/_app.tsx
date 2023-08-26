import { AppProps } from 'next/app';
import Head from 'next/head';
import '@nx-shared-styles';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>API — Freeimage.host</title>
      </Head>
      <main className='app'>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
