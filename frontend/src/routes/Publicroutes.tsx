/* eslint-disable no-nested-ternary */
import { useAppState } from "../business/overmind";
import { NavigationBar } from "../UI/components/Navigation";
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
      <NavigationBar />
      {appState.currentPage === "authors" ? <AuthorsPage /> : null}
      {appState.currentPage === "books" ? <BooksPage /> : null}
      {appState.currentPage === "signin" ? <SignInPage /> : null}
      {appState.currentPage === "signup" ? <SignUpPage /> : null}
    </>
  );
}
