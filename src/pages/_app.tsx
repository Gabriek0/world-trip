import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";

import { app } from "../config/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo title={app.name} />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
