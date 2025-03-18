import { c as createComponent, r as renderHead, a as addAttribute, b as renderTemplate } from '../chunks/astro/server_BDvNDvr9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                  */
import { g as getCollection } from '../chunks/_astro_content_w6kU0Qd-.mjs';
export { renderers } from '../renderers.mjs';

const $$Categories = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const categories = {};
  allPosts.forEach((post) => {
    post.data.categories.forEach((category) => {
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(post);
    });
  });
  return renderTemplate`<html> <head><title>Categories</title>${renderHead()}</head> <body class="categories-page"> <!-- ✅ Scoped class added --> <header> <img src="/logo1.png" alt="Obscurepedia Logo" width="350"> <nav> <ul> <li><a href="/">Home</a></li> <li><a href="/posts">Posts</a></li> <li><a href="/categories">Categories</a></li> </ul> </nav> </header> <main> <h1 class="page-title">Categories</h1> ${Object.entries(categories).map(([category, posts]) => renderTemplate`<section class="category-section"> <h2>${category}</h2> <ul> ${posts.map((post) => renderTemplate`<li> <a${addAttribute(`/posts/${post.slug}/`, "href")}>${post.data.title}</a> </li>`)} </ul> </section>`)} </main> </body></html>`;
}, "E:/obscure/tremendous-transit/src/pages/categories.astro", void 0);

const $$file = "E:/obscure/tremendous-transit/src/pages/categories.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Categories,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
