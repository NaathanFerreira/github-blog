import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "100": "#E7EDF4",
      "200": "#C4D4E3",
      "300": "#AFC2D4",
      "400": "#7B96B2",
      "500": "#3A536B",
    },
    blue: {
      "200": "#3294F8",
      "400": "#1C2F41",
      "500": "#112131",
      "600": "#0B1B2B",
      "800": "#071422",
      "900": "#040F1A",
    },
  },
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "blue.800",
      },
    },
  },
});
