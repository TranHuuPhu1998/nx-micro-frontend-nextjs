import { AppProps } from 'next/app';
import Head from 'next/head';
import '@nx-nextjs/styles';
import './styles.css';
import React from 'react';

// if (!process.browser) React.useLayoutEffect = React.useEffect;

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to timekeeping!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
