import 'kleur/colors';
import { j as decodeKey } from './chunks/astro/server_BDvNDvr9.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DVuIJ2UK.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/obscure/tremendous-transit/","cacheDir":"file:///E:/obscure/tremendous-transit/node_modules/.astro/","outDir":"file:///E:/obscure/tremendous-transit/dist/","srcDir":"file:///E:/obscure/tremendous-transit/src/","publicDir":"file:///E:/obscure/tremendous-transit/public/","buildClientDir":"file:///E:/obscure/tremendous-transit/dist/client/","buildServerDir":"file:///E:/obscure/tremendous-transit/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/get_facebook_post_url","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/get_facebook_post_url\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"get_facebook_post_url","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/get_facebook_post_url.js","pathname":"/api/get_facebook_post_url","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/test_api","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/test_api\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"test_api","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/test_api.js","pathname":"/api/test_api","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CbUqc-8N.css"}],"routeData":{"route":"/categories","isIndex":false,"type":"page","pattern":"^\\/categories\\/?$","segments":[[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categories.astro","pathname":"/categories","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CbUqc-8N.css"}],"routeData":{"route":"/posts/[slug]","isIndex":false,"type":"page","pattern":"^\\/posts\\/([^/]+?)\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/posts/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CbUqc-8N.css"},{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.content-wrapper[data-astro-cid-sckkx6r4]{display:flex;flex-direction:column;min-height:100vh}\n"}],"routeData":{"route":"/posts","isIndex":false,"type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts.astro","pathname":"/posts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.content-wrapper[data-astro-cid-sckkx6r4]{display:flex;flex-direction:column;min-height:100vh}\n"}],"routeData":{"route":"/privacy-policy","isIndex":false,"type":"page","pattern":"^\\/privacy-policy\\/?$","segments":[[{"content":"privacy-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy-policy.md","pathname":"/privacy-policy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.content-wrapper[data-astro-cid-sckkx6r4]{display:flex;flex-direction:column;min-height:100vh}\n"}],"routeData":{"route":"/teasers/are-you-more-bacteria-than-human-discover-this-baffling-truth","isIndex":false,"type":"page","pattern":"^\\/teasers\\/are-you-more-bacteria-than-human-discover-this-baffling-truth\\/?$","segments":[[{"content":"teasers","dynamic":false,"spread":false}],[{"content":"are-you-more-bacteria-than-human-discover-this-baffling-truth","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/teasers/are-you-more-bacteria-than-human-discover-this-baffling-truth.md","pathname":"/teasers/are-you-more-bacteria-than-human-discover-this-baffling-truth","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.content-wrapper[data-astro-cid-sckkx6r4]{display:flex;flex-direction:column;min-height:100vh}\n"}],"routeData":{"route":"/terms-of-service","isIndex":false,"type":"page","pattern":"^\\/terms-of-service\\/?$","segments":[[{"content":"terms-of-service","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms-of-service.md","pathname":"/terms-of-service","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CbUqc-8N.css"},{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.content-wrapper[data-astro-cid-sckkx6r4]{display:flex;flex-direction:column;min-height:100vh}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/obscure/tremendous-transit/src/pages/categories.astro",{"propagation":"in-tree","containsHead":true}],["E:/obscure/tremendous-transit/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/categories@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["E:/obscure/tremendous-transit/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["E:/obscure/tremendous-transit/src/pages/posts.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["E:/obscure/tremendous-transit/src/pages/teasers/are-you-more-bacteria-than-human-discover-this-baffling-truth.md",{"propagation":"none","containsHead":true}],["E:/obscure/tremendous-transit/src/pages/privacy-policy.md",{"propagation":"none","containsHead":true}],["E:/obscure/tremendous-transit/src/pages/terms-of-service.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/get_facebook_post_url@_@js":"pages/api/get_facebook_post_url.astro.mjs","\u0000@astro-page:src/pages/api/test_api@_@js":"pages/api/test_api.astro.mjs","\u0000@astro-page:src/pages/categories@_@astro":"pages/categories.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"pages/posts/_slug_.astro.mjs","\u0000@astro-page:src/pages/posts@_@astro":"pages/posts.astro.mjs","\u0000@astro-page:src/pages/privacy-policy@_@md":"pages/privacy-policy.astro.mjs","\u0000@astro-page:src/pages/teasers/are-you-more-bacteria-than-human-discover-this-baffling-truth@_@md":"pages/teasers/are-you-more-bacteria-than-human-discover-this-baffling-truth.astro.mjs","\u0000@astro-page:src/pages/terms-of-service@_@md":"pages/terms-of-service.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BIvH3M7i.mjs","E:/obscure/tremendous-transit/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_zZBwwdmB.mjs","E:\\obscure\\tremendous-transit\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","E:\\obscure\\tremendous-transit\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CY7mGM7o.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.CbUqc-8N.css","/favicon.svg","/logo1.png","/images/6213b40494-20250310233050-0.jpg","/images/6213b40494-20250310233113-1.jpg","/images/6213b40494-20250310233149-2.jpg","/images/67f8ec5adc-20250312231456-0.jpg","/images/67f8ec5adc-20250312231524-1.jpg","/images/67f8ec5adc-20250312231610-2.jpg","/images/76e2f074e7-20250313160356-0.jpg","/images/76e2f074e7-20250313160425-1.jpg","/images/76e2f074e7-20250313160455-2.jpg","/images/are-you-more-bacteria-than-human-discover-this-baffling-truth-facebook.jpg","/images/d61bf3edce-20250316140324-0.jpg","/images/d61bf3edce-20250316140356-1.jpg","/images/d61bf3edce-20250316140423-2.jpg","/images/discover-the-39-trillion-unseen-inhabitants-living-inside-you-right-now-facebook.jpg","/images/discover-the-astonishing-journey-your-blood-takes-every-day-facebook.jpg","/images/discover-the-surprising-lifespan-of-each-cell-in-your-body-facebook.jpg","/images/fc003eab2d-20250309205036-0.jpg","/images/fc003eab2d-20250309205059-1.jpg","/images/fc003eab2d-20250309205123-2.jpg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"7eFWLxN1kpTTJFcxrpKNYxoV4P/p84dSjAcdN3skkmo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
