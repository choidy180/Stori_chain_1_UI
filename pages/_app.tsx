import '../styles/global-style.ts';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from '../styles/theme';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>감도 높은 취향 셀렉트몰 29CM | Next</title>
      </Head>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Nav/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
