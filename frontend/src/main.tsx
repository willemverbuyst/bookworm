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
  <React.StrictMode>
    <ChakraProvider>
      <Provider value={overmind}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
