export const ADDON_ID = "storybook/my-addon";
export const PANEL_ID = `${ADDON_ID}/panel`;
export const PARAM_KEY = `myAddonParameter`;

export type MyAddonParams = {
  /** 数値 */
  num?: number;
};

export const INITIAL_ADDON_PARAMS: MyAddonParams = {};
