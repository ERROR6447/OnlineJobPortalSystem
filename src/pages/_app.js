import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

/*
To Extend the theme of the application
import {extendTheme} from "@chakra-ui/react"
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

<ChakraProvider theme={theme}>
  <Component {...pageProps} />
</ChakraProvider>

*/

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
