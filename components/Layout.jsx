import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer.jsx';
import Navbar from './NavBar.jsx';

import theme from '../theme/theme.js';

const { black } = theme.colors;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box m='auto' backgroundColor={black[50]} >
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
