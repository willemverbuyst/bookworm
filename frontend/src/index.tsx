import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from './reportWebVitals';
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { config } from "./business/overmind";
import App from "./App";

const overmind = createOvermind(config);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider value={overmind}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
