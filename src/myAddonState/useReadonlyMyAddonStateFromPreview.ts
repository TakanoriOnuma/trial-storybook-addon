import { PARAM_KEY } from "../constants";
import { useGlobals, useParameter } from "@storybook/preview-api";

import { INITIAL_MY_ADDON_STATE, MyAddonState } from "./MyAddonState";

/**
 * preview側で使用できる読み取り専用のMyAddonStateを参照するhooks
 */
export const useReadonlyMyAddonStateFromPreview = (): MyAddonState => {
  const [globals] = useGlobals();
  const globalParams: MyAddonState | null =
    Object.keys(globals[PARAM_KEY] ?? {}).length > 0
      ? globals[PARAM_KEY]
      : null;

  const params = useParameter(PARAM_KEY, INITIAL_MY_ADDON_STATE);
  const fallbackAddonState: MyAddonState = params ?? INITIAL_MY_ADDON_STATE;

  return globalParams ?? fallbackAddonState;
};
