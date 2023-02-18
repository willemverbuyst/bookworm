import "./App.css";
import { Form } from "./Pages/Form";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box className="container" m={4}>
        <Heading>react-hook-form and chakra-ui</Heading>
        <Form />
      </Box>
    </ChakraProvider>
  );
}

export default App;
