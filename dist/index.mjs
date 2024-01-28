import { useGlobals, useParameter } from '@storybook/preview-api';

var o="myAddonParameter";var t={};var n=()=>{let[e]=useGlobals();return {...useParameter(o,t)??t,...e[o]}};

export { n as useMyAddonState };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map