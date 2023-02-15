import { IContext } from "overmind";
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

export const config = {
  state,
  actions,
  effects,
};

export type Context = IContext<typeof config>;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
export const useEffects = createEffectsHook<Context>();
export const useReaction = createReactionHook<Context>();

// Hack to give Cypress access to Overmind
if ((window as any).Cypress) {
  (window as any).overmind = config;
}
