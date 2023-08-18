/* eslint-disable no-nested-ternary */
import { Page } from "../business/models";
import { useAppState } from "../business/overmind";
import { SignInPage } from "../UI/pages/Auth/SignInPage";
import { SignUpPage } from "../UI/pages/Auth/SingUpPage";
import { AuthorsPage } from "../UI/pages/Authors/AuthorsPage";
import { BooksPage } from "../UI/pages/Books/BooksPage";

export default function PublicRoutes() {
  const appState = useAppState().app;
  const isPublicRoute = [
    Page.AUTHORS,
    Page.BOOKS,
    Page.SIGNIN,
    Page.SIGNUP,
  ].some((route) => route === appState.currentPage);

  if (!isPublicRoute) {
    return null;
  }

  return (
    <>
      {appState.currentPage === Page.AUTHORS ? <AuthorsPage /> : null}
      {appState.currentPage === Page.BOOKS ? <BooksPage /> : null}
      {appState.currentPage === Page.SIGNIN ? <SignInPage /> : null}
      {appState.currentPage === Page.SIGNUP ? <SignUpPage /> : null}
    </>
  );
}
