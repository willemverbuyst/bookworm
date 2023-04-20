import { useAppState } from "../business/overmind";
import { NavigationBar } from "../UI/components/Navigation";
import { AdminGenrePage } from "../UI/pages/Admin/AdminGenrePage";
import { AdminLanguagePage } from "../UI/pages/Admin/AdminLanguagePage";
import { AdminLibraryPage } from "../UI/pages/Admin/AdminLibraryPage";
import { AdminPage } from "../UI/pages/Admin/AdminPage";
import { HomePage } from "../UI/pages/Home";
import { RentalsPage } from "../UI/pages/Rentals";
import { AddReviewPage, AllReviewsPage } from "../UI/pages/Reviews";

export default function PrivateRoutes() {
  const { isSignedIn } = useAppState().auth;
  const appState = useAppState().app;

  if (!isSignedIn) {
    return null;
  }

  return (
    <>
      <NavigationBar />
      {appState.currentPage === "home" ? <HomePage /> : null}
      {appState.currentPage === "admin" ? <AdminPage /> : null}
      {appState.currentPage === "admin/genre" ? <AdminGenrePage /> : null}
      {appState.currentPage === "admin/language" ? <AdminLanguagePage /> : null}
      {appState.currentPage === "admin/library" ? <AdminLibraryPage /> : null}
      {appState.currentPage === "rentals" ? <RentalsPage /> : null}
      {appState.currentPage === "reviews" ? <AllReviewsPage /> : null}
      {appState.currentPage === "reviews/new" ? <AddReviewPage /> : null}
    </>
  );
}
