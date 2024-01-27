import { Addon_BaseType } from "@storybook/types";
import { AddonPanel } from "@storybook/components";
import { useParameter, useGlobals } from "@storybook/manager-api";
import { PARAM_KEY } from "./constants";

import { useEffect } from "react";
import { INITIAL_ADDON_PARAMS, MyAddonParams } from "./constants";

export const Panel: Addon_BaseType["render"] = ({ active }) => {
  const [globals, updateGlobals] = useGlobals();
  const addonParams: MyAddonParams = globals[PARAM_KEY] ?? INITIAL_ADDON_PARAMS;

  const params = useParameter(PARAM_KEY, INITIAL_ADDON_PARAMS);

  useEffect(() => {
    console.log("effect", params);
    updateGlobals({
      [PARAM_KEY]: params,
    });
  }, [params]);

  return (
    <AddonPanel active={active ?? false}>
      <div>パラメータ設定</div>
      <input
        value={addonParams.num ?? ""}
        type="number"
        onChange={(event) => {
          const num = event.target.valueAsNumber;
          if (Number.isNaN(num)) {
            return;
          }
          updateGlobals({
            [PARAM_KEY]: {
              ...addonParams,
              num,
            },
          });
        }}
      />
    </AddonPanel>
  );
};
