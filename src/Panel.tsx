import { Addon_BaseType } from "@storybook/types";
import { AddonPanel } from "@storybook/components";
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
      <div>パラメータ設定</div>
      <input
        value={myAddonState.num ?? ""}
        type="number"
        onChange={(event) => {
          if (event.target.value === "") {
            setMyAddonState({
              ...myAddonState,
              num: undefined,
            });
            return;
          }
          const num = event.target.valueAsNumber;
          if (Number.isNaN(num)) {
            return;
          }
          setMyAddonState({
            ...myAddonState,
            num,
          });
        }}
      />
    </AddonPanel>
  );
};
