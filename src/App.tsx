import "./App.css";
import { Form } from "./Pages/Form";
import { ChakraProvider, Heading } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="container">
        <Heading>react-form-hook and chakra-ui</Heading>
        <Form />
      </div>
    </ChakraProvider>
  );
}

export default App;
