import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import "@fontsource/nunito";
import { theme } from "./styles/theme";
import { GithubContextProvider } from "./context/GithubContext";

/*
https://api.github.com/users/naathanferreira
https://api.github.com/search/issues?q=%20repo:naathanferreira/github-blog
https://api.github.com/repos/naathanferreira/github-blog/issues/2
*/

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GithubContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GithubContextProvider>
    </ChakraProvider>
  );
}

export default App;
