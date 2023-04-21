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
    [Page.WELCOME]: actions.app.showWelcomePage,
    [Page.HOME]: actions.app.showHomePage,
    [Page.ADMIN]: actions.admin.showAdminPage,
    [Page.ADMIN_GENRE]: actions.admin.showAdminGenrePage,
    [Page.ADMIN_LANGUAGE]: actions.admin.showAdminLanguagePage,
    [Page.ADMIN_LIBRARY]: actions.admin.showAdminLibraryPage,
    [Page.RENTALS]: actions.rental.showRentalsPage,
    [Page.REVIEWS]: actions.review.showReviewsPage,
    [Page.REVIEWS_NEW]: actions.review.showAddReviewPage,
    [Page.BOOKWORMS]: actions.bookworm.showBookwormsPage,
    [Page.AUTHORS]: actions.author.showAuthorsPage,
    [Page.BOOKS]: actions.book.showBooksPage,
    [Page.SIGNIN]: actions.auth.showSignInPage,
    [Page.SIGNUP]: actions.auth.showSignUpPage,
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
