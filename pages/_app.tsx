import { AppProps } from 'next/app';
import '../app/globals.css';
import Layout from '@/app/src/components/layout';

const MyApp= ({ Component, pageProps }:AppProps) => {
  return( <Layout><Component {...pageProps}/></Layout>)
};

export default MyApp;
