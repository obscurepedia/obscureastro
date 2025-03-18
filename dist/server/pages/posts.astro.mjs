import { c as createComponent, f as renderComponent, b as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_BDvNDvr9.mjs';
import 'kleur/colors';
/* empty css                                  */
import { g as getCollection } from '../chunks/_astro_content_w6kU0Qd-.mjs';
import { $ as $$Layout } from '../chunks/Layout_BoRSSle4.mjs';
export { renderers } from '../renderers.mjs';

const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const posts = allPosts.filter((post) => !post.data.draft);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="posts-page"> <!-- ✅ Keeps grid styling intact --> <header> <img src="/logo1.png" alt="Obscurepedia Logo" width="350"> <nav> <ul> <li><a href="/">Home</a></li> <li><a href="/posts">Posts</a></li> <li><a href="/categories">Categories</a></li> </ul> </nav> </header> <h1 class="page-title">All Posts</h1> <div class="post-grid"> ${posts.map((post) => renderTemplate`<article> <a${addAttribute(`/posts/${post.slug}/`, "href")}> <img${addAttribute(post.data.featured_image, "src")}${addAttribute(post.data.title, "alt")}> <h2>${post.data.title}</h2> </a> </article>`)} </div> </main> ` })}`;
}, "E:/obscure/tremendous-transit/src/pages/posts.astro", void 0);

const $$file = "E:/obscure/tremendous-transit/src/pages/posts.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Posts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
