import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BDyKs8jd.mjs';
import { manifest } from './manifest_BIvH3M7i.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/get_facebook_post_url.astro.mjs');
const _page2 = () => import('./pages/api/test_api.astro.mjs');
const _page3 = () => import('./pages/categories.astro.mjs');
const _page4 = () => import('./pages/posts/_slug_.astro.mjs');
const _page5 = () => import('./pages/posts.astro.mjs');
const _page6 = () => import('./pages/privacy-policy.astro.mjs');
const _page7 = () => import('./pages/teasers/are-you-more-bacteria-than-human-discover-this-baffling-truth.astro.mjs');
const _page8 = () => import('./pages/terms-of-service.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/get_facebook_post_url.js", _page1],
    ["src/pages/api/test_api.js", _page2],
    ["src/pages/categories.astro", _page3],
    ["src/pages/posts/[slug].astro", _page4],
    ["src/pages/posts.astro", _page5],
    ["src/pages/privacy-policy.md", _page6],
    ["src/pages/teasers/are-you-more-bacteria-than-human-discover-this-baffling-truth.md", _page7],
    ["src/pages/terms-of-service.md", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///E:/obscure/tremendous-transit/dist/client/",
    "server": "file:///E:/obscure/tremendous-transit/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
