import { Addon_BaseType } from "@storybook/types";
import { AddonPanel } from "@storybook/components";
import { PureArgsTable } from "@storybook/blocks";
import { useParameter } from "@storybook/manager-api";
import { PARAM_KEY } from "./constants";

import { useEffect } from "react";
import { useMyAddonStateFromManager } from "./myAddonState/useMyAddonStateFromManager";
import { INITIAL_MY_ADDON_STATE } from "./myAddonState/MyAddonState";

export const Panel: Addon_BaseType["render"] = ({ active }) => {
  const [myAddonState, setMyAddonState] = useMyAddonStateFromManager();

  const params = useParameter(PARAM_KEY, INITIAL_MY_ADDON_STATE);

  useEffect(() => {
    setMyAddonState(params);
  }, [params]);

  return (
    <AddonPanel active={active ?? false}>
      <h2>パラメータ設定</h2>
      <PureArgsTable
        args={myAddonState}
        rows={{
          flag: {
            name: "flag",
            control: {
              type: "boolean",
            },
          },
          num: {
            name: "num",
            control: {
              type: "number",
            },
          },
        }}
        compact
        inAddonPanel
        updateArgs={(newArgs) => {
          setMyAddonState(newArgs);
        }}
        resetArgs={() => {
          setMyAddonState(params);
        }}
      />
    </AddonPanel>
  );
};
