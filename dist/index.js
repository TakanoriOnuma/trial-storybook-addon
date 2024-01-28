'use strict';

var previewApi = require('@storybook/preview-api');

var o="myAddonParameter";var t={};var n=()=>{let[e]=previewApi.useGlobals();return {...previewApi.useParameter(o,t)??t,...e[o]}};

exports.useMyAddonState = n;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map