import { IContext } from "overmind";
import {
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createStateHook,
} from "overmind-react";
import { namespaced } from "overmind/config";
import * as admin from "./Admin";
import * as api from "./Api";
import * as app from "./App";
import * as auth from "./Auth";
import * as author from "./Author";
import * as book from "./Book";
import * as bookworm from "./Bookworm";
import * as country from "./Country";
import * as genre from "./Genre";
import * as language from "./Language";
import * as library from "./Library";
import * as payment from "./Payment";
import * as rental from "./Rental";
import * as review from "./Review";

export const config = namespaced({
  admin,
  api,
  app,
  auth,
  author,
  book,
  bookworm,
  country,
  genre,
  language,
  library,
  payment,
  rental,
  review,
});

export type Context = IContext<{
  state: typeof config.state;
  actions: typeof config.actions;
  effects: typeof config.effects;
}>;

export type RootState = typeof config.state;

export type StateSection = keyof RootState;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
export const useEffects = createEffectsHook<Context>();
export const useReaction = createReactionHook<Context>();

export const stateSections = Object.keys(config.state).reduce(
  (a, b) => ({
    ...a,
    [b]: b,
  }),
  {} as { [k in keyof typeof config.state]: k }
);

export const stateSectionsWithTable = {
  [stateSections.author]: stateSections.author,
  [stateSections.book]: stateSections.book,
  [stateSections.bookworm]: stateSections.bookworm,
  [stateSections.genre]: stateSections.genre,
  [stateSections.language]: stateSections.language,
  [stateSections.library]: stateSections.library,
  [stateSections.payment]: stateSections.payment,
  [stateSections.rental]: stateSections.rental,
};
