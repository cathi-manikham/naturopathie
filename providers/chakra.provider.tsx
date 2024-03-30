"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../theme/theme";

export function StyleProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode='light' />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
