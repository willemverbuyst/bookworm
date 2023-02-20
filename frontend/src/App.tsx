import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./UI/components/AppBar";
import Authors from "./UI/pages/Authors";
import BooksPage from "./UI/pages/Books/booksPage";
import ReviewPage from "./UI/pages/Reviews/reviewPage";
import LoginPage from "./UI/pages/Login/loginPage";
import Message from "./UI/components/Message";
import PageNotFoundPage from "./UI/pages/PageNotFound/pageNotFoundPage";
import WelcomePage from "./UI/pages/Welcome/welcomePage";
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
              <BooksPage />
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
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/review"
          element={
            <PrivateRoute>
              <>
                <AppBar />
                <ReviewPage />
              </>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
      <Message />
    </Box>
  );
}
