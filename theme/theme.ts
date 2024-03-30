import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";

export const theme = extendTheme({
  fonts: {
    heading: fonts.inter.style.fontFamily,
    body: fonts.inter.style.fontFamily,
  },
});
