import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { config } from "./business/overmind";
import App from "./App";

const overmind = createOvermind(config);

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
