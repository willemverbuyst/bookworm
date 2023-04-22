import { ChakraProvider } from "@chakra-ui/react";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { config } from "./business/overmind";
import "./index.css";

const overmind = createOvermind(config, {
  devtools: "localhost:3031",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  // Strictmode doesn't work with overmind in the lastest version of react and overmind
  // State (derived fn) updates
  // Component doesn't rerender
  <ChakraProvider>
    <Provider value={overmind}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
);
