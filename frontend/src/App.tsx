import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppState } from "./business/overmind";
import PrivateRoute from "./helpers/PrivateRoute";
import { useToastHook } from "./UI/hooks";
import { AdminPage } from "./UI/pages/Admin/AdminPage";
import { SignInPage, SignUpPage } from "./UI/pages/Auth";
import { AuthorsPage } from "./UI/pages/Authors";
import { BooksPage } from "./UI/pages/Books";
import { BookwormsPage } from "./UI/pages/BookWorms";
import { HomePage } from "./UI/pages/Home";
import { PageNotFoundPage } from "./UI/pages/PageNotFound";
import { RentalsPage } from "./UI/pages/Rentals";
import { AddReviewPage, AllReviewsPage } from "./UI/pages/Reviews";
import { WelcomePage } from "./UI/pages/Welcome";

export default function App() {
  const [, setToast] = useToastHook();

  const { message, status, statusText } = useAppState().api.response;

  useEffect(() => {
    if (message && status) {
      setToast({ title: statusText, status, description: message });
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
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/rentals"
          element={
            <PrivateRoute>
              <RentalsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/reviews/add"
          element={
            <PrivateRoute>
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <PrivateRoute>
              <AllReviewsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </Box>
  );
}
