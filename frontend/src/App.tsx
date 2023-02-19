import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./UI/components/AppBar";
import Authors from "./UI/pages/Authors";
import Books from "./UI/pages/Books";
import Review from "./UI/pages/Review";
import Login from "./UI/pages/Login";
import Message from "./UI/components/Message";
import PageNotFound from "./UI/pages/PageNotFound";
import WelcomePage from "./UI/pages/Hero/welcomePage";
import PrivateRoute from "./helpers/PrivateRoute";

export default function App() {
  return (
    <Box w="100%">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/home"
          element={
            <>
              <AppBar />
              <WelcomePage />
            </>
          }
        />
        <Route
          path="/books"
          element={
            <>
              <AppBar />
              <Books />
            </>
          }
        />
        <Route
          path="/authors"
          element={
            <>
              <AppBar />
              <Authors />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/review"
          element={
            <PrivateRoute>
              <>
                <AppBar />
                <Review />
              </>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Message />
    </Box>
  );
}
