import 'bootstrap/dist/css/bootstrap.min.css';
// デフォルトのテーマ
import '@splidejs/react-splide/css';

import '../styles/styles.scss';
import '../styles/menu.scss';

import '../styles/index.scss';
import '../styles/about.scss';
import '../styles/resume.scss';

import Head from 'next/head';

import setting from '../setting';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{setting.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href={`${setting.basePath}/devil.png`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
