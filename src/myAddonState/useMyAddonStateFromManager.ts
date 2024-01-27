import { PARAM_KEY } from "../constants";
import { useGlobals, useParameter } from "@storybook/manager-api";

import { INITIAL_MY_ADDON_STATE, MyAddonState } from "./MyAddonState";

/**
 * manager側で使用できるMyAddonStateを操作するhooks
 */
export const useMyAddonStateFromManager = () => {
  const [globals, updateGlobals] = useGlobals();
  const globalParams: MyAddonState | null =
    Object.keys(globals[PARAM_KEY] ?? {}).length > 0
      ? globals[PARAM_KEY]
      : null;

  const params = useParameter(PARAM_KEY, INITIAL_MY_ADDON_STATE);
  const fallbackState: MyAddonState = params ?? INITIAL_MY_ADDON_STATE;

  const myAddonState: MyAddonState = globalParams ?? fallbackState;

  const setMyAddonState = (newState: MyAddonState) => {
    const droppedAddonState: MyAddonState = { ...newState };
    // パラメータが一緒のものは取り除く
    Object.keys(newState).forEach((key) => {
      const castedKey = key as keyof MyAddonState;
      if (newState[castedKey] === fallbackState[castedKey]) {
        delete droppedAddonState[castedKey];
      }
    });

    updateGlobals({
      [PARAM_KEY]: droppedAddonState,
    });
  };

  return [myAddonState, setMyAddonState] as const;
};
