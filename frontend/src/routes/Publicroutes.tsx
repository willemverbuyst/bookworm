/* eslint-disable no-nested-ternary */
import { useAppState } from "../business/overmind";
import { SignInPage, SignUpPage } from "../UI/pages/Auth";
import { AuthorsPage } from "../UI/pages/Authors";
import { BooksPage } from "../UI/pages/Books";

export default function PublicRoutes() {
  const appState = useAppState().app;
  const isPublicRoute = ["authors", "books", "signin", "signup"].includes(
    appState.currentPage
  );

  if (!isPublicRoute) {
    return null;
  }

  return (
    <>
      {appState.currentPage === "authors" ? <AuthorsPage /> : null}
      {appState.currentPage === "books" ? <BooksPage /> : null}
      {appState.currentPage === "signin" ? <SignInPage /> : null}
      {appState.currentPage === "signup" ? <SignUpPage /> : null}
    </>
  );
}
