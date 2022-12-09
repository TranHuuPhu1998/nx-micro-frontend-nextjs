import { AppProps } from 'next/app';
import '@nx-nextjs/styles';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>APP Exchange Rates Data API</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        <Toaster
          position="top-center"
          toastOptions={{ className: 'react-hot-toast' }}
        />
      </main>
    </>
  );
}

export default CustomApp;
