import { Addon_TypesEnum as types } from "@storybook/types";
import { addons } from "@storybook/manager-api";
import { ADDON_ID, PANEL_ID } from "./constants";

import { Panel } from "./Panel";

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "My addon",
    match: ({ viewMode }) => viewMode === "story",
    render: Panel,
  });
});
