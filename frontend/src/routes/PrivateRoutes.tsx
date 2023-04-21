import { Page } from "../business/models";
import { useAppState } from "../business/overmind";
import { AdminGenrePage } from "../UI/pages/Admin/AdminGenrePage";
import { AdminLanguagePage } from "../UI/pages/Admin/AdminLanguagePage";
import { AdminLibraryPage } from "../UI/pages/Admin/AdminLibraryPage";
import { AdminPage } from "../UI/pages/Admin/AdminPage";
import { BookwormsPage } from "../UI/pages/BookWorms";
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
      {appState.currentPage === Page.HOME ? <HomePage /> : null}
      {appState.currentPage === Page.ADMIN ? <AdminPage /> : null}
      {appState.currentPage === Page.ADMIN_GENRE ? <AdminGenrePage /> : null}
      {appState.currentPage === Page.ADMIN_LANGUAGE ? (
        <AdminLanguagePage />
      ) : null}
      {appState.currentPage === Page.ADMIN_LIBRARY ? (
        <AdminLibraryPage />
      ) : null}
      {appState.currentPage === Page.BOOKWORMS ? <BookwormsPage /> : null}
      {appState.currentPage === Page.RENTALS ? <RentalsPage /> : null}
      {appState.currentPage === Page.REVIEWS ? <AllReviewsPage /> : null}
      {appState.currentPage === Page.REVIEWS_NEW ? <AddReviewPage /> : null}
    </>
  );
}
