import type { AppProps } from 'next/app';
import Page from '../components/Page';
import ProgressBar from '../components/ProgressBar';
import GlobalStyles from '../styles/GlobalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <ProgressBar />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
};
export default MyApp;
