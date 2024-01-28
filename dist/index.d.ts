type MyAddonState = {
    /** フラグ */
    flag?: boolean;
    /** 数値 */
    num?: number;
};

/**
 * preview側で使用できる読み取り専用のMyAddonStateを参照するhooks
 */
declare const useReadonlyMyAddonStateFromPreview: () => MyAddonState;

export { type MyAddonState, useReadonlyMyAddonStateFromPreview as useMyAddonState };
