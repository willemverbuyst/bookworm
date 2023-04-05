import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppState } from "./business/overmind";
import PrivateRoute from "./helpers/PrivateRoute";
import { useToastHook } from "./UI/hooks/useToastHook";
import SignInPage from "./UI/pages/Auth/SignInPage";
import SignUpPage from "./UI/pages/Auth/SingUpPage";
import AuthorsPage from "./UI/pages/Authors/AuthorsPage";
import BooksPage from "./UI/pages/Books/BooksPage";
import BookwormsPage from "./UI/pages/BookWorms/BookwormsPage";
import HomePage from "./UI/pages/Home/HomePage";
import PageNotFoundPage from "./UI/pages/PageNotFound/PageNotFoundPage";
import RentalsPage from "./UI/pages/Rentals/RentalsPage";
import ReviewPage from "./UI/pages/Reviews/ReviewPage";
import WelcomePage from "./UI/pages/Welcome/WelcomePage";

export default function App() {
  const [toast, setToast] = useToastHook();

  const { message, status } = useAppState().apiResponse;

  useEffect(() => {
    if (message && status) {
      setToast({ title: message, status });
    }
  }, [message, status]);

  return (
    <Box>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/bookworms" element={<BookwormsPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
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
    </Box>
  );
}
