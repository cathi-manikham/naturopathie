"use client";

import {
  ChakraProvider,
  ColorModeScript,
  createStandaloneToast,
} from "@chakra-ui/react";
import { theme } from "../theme/theme";

export function StyleProviders({ children }: { children: React.ReactNode }) {
  const { ToastContainer } = createStandaloneToast();

  return (
    <>
      <ColorModeScript initialColorMode='light' />
      <ChakraProvider theme={theme}>
        <ToastContainer />
        {children}
      </ChakraProvider>
    </>
  );
}
