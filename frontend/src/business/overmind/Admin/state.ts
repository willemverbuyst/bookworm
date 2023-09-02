import { derived } from "overmind";
import { RootState } from "..";
import { AdminState } from "../../models";

export const state: AdminState = {
  isLoading: false,
  menuItems: derived((_: AdminState, rootState: RootState) => {
    const { isSignedIn } = rootState.auth;
    return isSignedIn
      ? [
          { label: "Language", href: "/admin/language" },
          { label: "Genre", href: "/admin/genre" },
          { label: "Library", href: "/admin/library" },
        ]
      : [];
  }),
};
