/* eslint-disable no-param-reassign */

import { Context } from "..";
import { NODE_ENV } from "../../../config";
import { utils } from "../../../utils";
import { Page } from "../../models";

export const onInitializeOvermind = async ({
  actions,
  effects,
  state,
}: Context) => {
  let startTime = 0;
  if (NODE_ENV === "development") startTime = Date.now();

  state.app.isLoading = true;
  effects.app.router.initialize({
    [Page.WELCOME]: actions.app.showWelcomePage,
    [Page.HOME]: actions.app.showHomePage,
    [Page.ADMIN]: actions.admin.showAdminPage,
    [Page.ADMIN_GENRE]: actions.admin.showAdminGenrePage,
    [Page.ADMIN_LANGUAGE]: actions.admin.showAdminLanguagePage,
    [Page.ADMIN_LIBRARY]: actions.admin.showAdminLibraryPage,
    [Page.PAYMENTS]: actions.payment.showPaymentsPage,
    [Page.RENTALS]: actions.rental.showRentalsPage,
    [Page.REVIEWS]: actions.review.showReviewsPage,
    [Page.REVIEWS_NEW]: actions.review.showAddReviewPage,
    [Page.BOOKWORMS]: actions.bookworm.showBookwormsPage,
    [Page.AUTHORS]: actions.author.showAuthorsPage,
    [Page.BOOKS]: actions.book.showBooksPage,
    [Page.SIGNIN]: actions.auth.showSignInPage,
    [Page.SIGNUP]: actions.auth.showSignUpPage,
    [Page.PAGE_NOT_FOUND]: actions.app.showPageNotFound,
  });
  const tokenFromLocalStorage = localStorage.getItem("token");
  if (tokenFromLocalStorage) {
    await actions.auth.getUserByToken({ tokenFromLocalStorage });
  }
  state.app.isLoading = false;

  if (NODE_ENV === "development" && startTime) {
    utils.logInfo(startTime, `initialize overmind in ${NODE_ENV} mode`);
  }
};

export const showHomePage = ({ state }: Context) => {
  state.app.currentPage = Page.HOME;
};

export const showWelcomePage = ({ state }: Context) => {
  state.app.currentPage = Page.WELCOME;
};

export const showPageNotFound = ({ state }: Context) => {
  state.app.currentPage = Page.PAGE_NOT_FOUND;
};
