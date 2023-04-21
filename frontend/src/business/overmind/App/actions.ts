/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";
import { Page } from "../../models";

export const onInitializeOvermind = async ({
  actions,
  effects,
  state,
}: Context) => {
  state.app.isLoading = true;
  effects.app.router.initialize({
    "/": actions.app.showWelcomePage,
    "/home": actions.app.showHomePage,
    "/admin": actions.admin.showAdminPage,
    "/admin/genre": actions.admin.showAdminGenrePage,
    "/admin/language": actions.admin.showAdminLanguagePage,
    "/admin/library": actions.admin.showAdminLibraryPage,
    "/rentals": actions.rental.showRentalsPage,
    "/reviews": actions.review.showReviewsPage,
    "/reviews/new": actions.review.showAddReviewPage,
    "/authors": actions.author.showAuthorsPage,
    "/books": actions.book.showBooksPage,
    "/signin": actions.auth.showSignInPage,
    "/signup": actions.auth.showSignUpPage,
  });
  const tokenFromLocalStorage = localStorage.getItem("token");
  if (!tokenFromLocalStorage) {
    state.app.isLoading = false;
    return;
  }

  actions.api.resetApiResponse();
  const response = await effects.auth.api.getUserByToken(tokenFromLocalStorage);

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
    state.app.isLoading = false;
    return;
  }

  state.api.response = { message: response.message, status: "success" };
  const token = response.token.access_token;
  localStorage.setItem("token", token);
  state.auth.token = token;
  state.auth.isSignedIn = true;
  state.auth.user = response.data;
  state.app.isLoading = false;
};

export const showHomePage = ({ state }: Context) => {
  state.app.currentPage = Page.HOME;
};

export const showWelcomePage = ({ state }: Context) => {
  state.app.currentPage = Page.WELCOME;
};
