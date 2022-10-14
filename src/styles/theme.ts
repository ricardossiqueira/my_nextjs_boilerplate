import {
  extendTheme,
  type ThemeConfig,
  StyleFunctionProps,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme: ThemeConfig = extendTheme({
  colors: {
    accent: {
      dark: chakraTheme.colors.pink,
      light: chakraTheme.colors.purple,
    },
  },
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#efefef", "gray.900")(props),
        color: mode("gray.900", "gray.100")(props),
        textColor: mode("gray.400", "gray.500")(props),
      },
    }),
  },
});
