import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import AuthorsPage from "./UI/pages/Authors/Authorspage";
import BooksPage from "./UI/pages/Books/BooksPage";
import ReviewPage from "./UI/pages/Reviews/ReviewPage";
import SignInPage from "./UI/pages/Auth/SignInPage";
import Message from "./UI/components/Message";
import PageNotFoundPage from "./UI/pages/PageNotFound/PageNotFoundPage";
import WelcomePage from "./UI/pages/Welcome/WelcomePage";
import PrivateRoute from "./helpers/PrivateRoute";
import HomePage from "./UI/pages/Home/HomePage";
import SignUpPage from "./UI/pages/Auth/SinhUpPage";

export default function App() {
  return (
    <Box w="100%">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/reviews"
          element={
            <PrivateRoute>
              <ReviewPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
      <Message />
    </Box>
  );
}
