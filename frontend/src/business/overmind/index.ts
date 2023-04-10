import { IContext } from "overmind";
import {
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createStateHook,
} from "overmind-react";
import { namespaced } from "overmind/config";
import * as api from "./Api";
import * as app from "./App";
import * as auth from "./Auth";
import * as author from "./Author";
import * as book from "./Book";
import * as bookworm from "./Bookworm";
import * as genre from "./Genre";
import * as language from "./Language";
import * as rental from "./Rental";
import * as review from "./Review";
import * as user from "./User";

export const config = namespaced({
  api,
  app,
  auth,
  author,
  book,
  bookworm,
  genre,
  language,
  rental,
  review,
  user,
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

export const stateSections1 = Object.keys(config.state).reduce(
  (a, b) => ({
    ...a,
    [b]: b,
  }),
  {} as { [k in keyof typeof config.state]: k }
);

export const stateSections = {
  [stateSections1.author]: stateSections1.author,
  [stateSections1.book]: stateSections1.book,
  [stateSections1.bookworm]: stateSections1.bookworm,
  [stateSections1.rental]: stateSections1.rental,
};
