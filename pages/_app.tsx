import '../styles/global-style.ts';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from '../styles/theme';
import { useEffect, useState } from 'react';
import { app, authService } from "../firebase/firebaseConfig";
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  // Components mount timing
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  return (
      <RecoilRoot>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>감도 높은 취향 셀렉트몰 29CM | Next</title>
        </Head>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <Component {...pageProps}/>
        </ThemeProvider>
      </RecoilRoot>
  )
}

export default MyApp
