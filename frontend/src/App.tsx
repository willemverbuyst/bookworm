import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppState } from "./business/overmind";
import { NavigationBar } from "./UI/components/Navigation";
import { useToastHook } from "./UI/hooks";
import { AdminGenrePage } from "./UI/pages/Admin/AdminGenrePage";
import { AdminLanguagePage } from "./UI/pages/Admin/AdminLanguagePage";
import { AdminLibraryPage } from "./UI/pages/Admin/AdminLibraryPage";
import { AdminPage } from "./UI/pages/Admin/AdminPage";
import { SignInPage, SignUpPage } from "./UI/pages/Auth";
import { AuthorsPage } from "./UI/pages/Authors";
import { BooksPage } from "./UI/pages/Books";
import { HomePage } from "./UI/pages/Home";

export default function App() {
  const [, setToast] = useToastHook();

  const { message, status, statusText } = useAppState().api.response;
  const appState = useAppState().app;

  useEffect(() => {
    if (message && status) {
      setToast({ title: statusText, status, description: message });
    }
  }, [message, status]);

  return (
    <Box>
      <NavigationBar />
      {appState.currentPage === "home" ? <HomePage /> : null}
      {appState.currentPage === "authors" ? <AuthorsPage /> : null}
      {appState.currentPage === "books" ? <BooksPage /> : null}
      {appState.currentPage === "signin" ? <SignInPage /> : null}
      {appState.currentPage === "signup" ? <SignUpPage /> : null}
      {appState.currentPage === "admin" ? <AdminPage /> : null}
      {appState.currentPage === "admin/genre" ? <AdminGenrePage /> : null}
      {appState.currentPage === "admin/language" ? <AdminLanguagePage /> : null}
      {appState.currentPage === "admin/library" ? <AdminLibraryPage /> : null}
      {/* <Routes>
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
          path="/admin/language"
          element={
            <PrivateRoute>
              <AdminLanguagePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/genre"
          element={
            <PrivateRoute>
              <AdminGenrePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/library"
          element={
            <PrivateRoute>
              <AdminLibraryPage />
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
      </Routes> */}
    </Box>
  );
}
