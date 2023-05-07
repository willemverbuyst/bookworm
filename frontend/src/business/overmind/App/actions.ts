/* eslint-disable no-param-reassign */
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
    [Page.PAYMENTS]: actions.payment.showPaymentPage,
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
  if (!tokenFromLocalStorage) {
    state.app.isLoading = false;
    return;
  }
  state.app.isLoading = false;

  actions.auth.getUserByToken({ tokenFromLocalStorage });
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
