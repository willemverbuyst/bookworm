import "./App.css";
import { Form } from "./Pages/Form";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="container">
        <h1 style={{ color: "#a3a3a3", fontStyle: "italic" }}>
          react-form-hook and material-ui
        </h1>
        <Form />
      </div>
    </ChakraProvider>
  );
}

export default App;
