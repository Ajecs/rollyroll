import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_JITivtKj.mjs';
import { manifest } from './manifest_B-RHMevP.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_5LppuX9e.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_CXT6z6-o.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/rolls/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/rolls/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1c87be13-497c-44d7-82f3-038f25035ec6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
