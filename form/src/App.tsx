import "./App.css";
import { Form } from "./Pages/Form";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Header } from "./Components/header/Header";

function App() {
  return (
    <ChakraProvider>
      <Box className="container" m={4}>
        <Header />
        <Form />
      </Box>
    </ChakraProvider>
  );
}

export default App;
