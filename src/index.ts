import { PARAM_KEY } from "./constants";
import { useGlobals } from "@storybook/preview-api";

import { INITIAL_ADDON_PARAMS, MyAddonParams } from "./constants";

export const useMyAddonParams = (): MyAddonParams => {
  const [globals] = useGlobals();
  const addonParams: MyAddonParams = globals[PARAM_KEY] ?? INITIAL_ADDON_PARAMS;

  return addonParams;
};
