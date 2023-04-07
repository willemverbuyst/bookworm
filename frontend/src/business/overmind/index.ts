import { IContext } from "overmind";
import {
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createStateHook,
} from "overmind-react";
import { namespaced } from "overmind/config";
import * as api from "./Api";
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

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
export const useEffects = createEffectsHook<Context>();
export const useReaction = createReactionHook<Context>();
