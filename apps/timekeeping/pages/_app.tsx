import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '@nx-nextjs/styles';

if (typeof document === 'undefined') {
  React.useLayoutEffect = React.useEffect;
}

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
