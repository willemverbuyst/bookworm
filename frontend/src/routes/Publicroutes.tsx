/* eslint-disable no-nested-ternary */
import { useAppState } from "../business/overmind";
import { Page } from "../configuration/navigation";
import { SignInPage } from "../UI/pages/Auth/SignInPage";
import { SignUpPage } from "../UI/pages/Auth/SingUpPage";
import { AuthorsPage } from "../UI/pages/Authors/AuthorsPage";
import { BooksPage } from "../UI/pages/Books/BooksPage";
import { WelcomePage } from "../UI/pages/Welcome/WelcomePage";

export default function PublicRoutes() {
  const appState = useAppState().app;
  const isPublicRoute = [
    Page.AUTHORS,
    Page.BOOKS,
    Page.SIGNIN,
    Page.SIGNUP,
    Page.WELCOME,
  ].some((route) => route === appState.currentPage);

  if (!isPublicRoute) {
    return null;
  }

  return (
    <>
      {appState.currentPage === Page.WELCOME ? <WelcomePage /> : null}
      {appState.currentPage === Page.AUTHORS ? <AuthorsPage /> : null}
      {appState.currentPage === Page.BOOKS ? <BooksPage /> : null}
      {appState.currentPage === Page.SIGNIN ? <SignInPage /> : null}
      {appState.currentPage === Page.SIGNUP ? <SignUpPage /> : null}
    </>
  );
}
