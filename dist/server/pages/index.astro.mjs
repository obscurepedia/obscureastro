import { c as createComponent, f as renderComponent, b as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_BDvNDvr9.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_w6kU0Qd-.mjs';
/* empty css                                  */
import { $ as $$Layout } from '../chunks/Layout_BoRSSle4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const sortedPosts = allPosts.filter((post) => !post.data.draft).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const featuredPost = sortedPosts[0];
  const recentPosts = sortedPosts.slice(1, 7);
  return renderTemplate`<!-- ✅ Wrap the entire page inside <Layout> -->${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="homepage"> <!-- ✅ Keeps homepage styling --> <header> <img src="/logo1.png" alt="Obscurepedia Logo" width="350"> <nav> <ul> <li><a href="/">Home</a></li> <li><a href="/posts">All Posts</a></li> <li><a href="/categories">Categories</a></li> </ul> </nav> </header> <h1 class="homepage-title">Featured Article</h1> <section class="featured-post"> <a${addAttribute(`/posts/${featuredPost.slug}/`, "href")}> <img${addAttribute(featuredPost.data.featured_image, "src")}${addAttribute(featuredPost.data.title, "alt")}> </a> <p class="featured-excerpt">${featuredPost.data.excerpt}</p> <a${addAttribute(`/posts/${featuredPost.slug}/`, "href")} class="btn read-more">Read More</a> </section> <h2 class="recent-title">Recent Articles</h2> <div class="post-grid"> ${recentPosts.map((post) => renderTemplate`<article> <a${addAttribute(`/posts/${post.slug}/`, "href")}> <img${addAttribute(post.data.featured_image, "src")}${addAttribute(post.data.title, "alt")}> <h2>${post.data.title}</h2> </a> </article>`)} </div> <div class="see-all"> <a href="/posts" class="btn">See All Posts</a> </div> </main> ` })}`;
}, "E:/obscure/tremendous-transit/src/pages/index.astro", void 0);

const $$file = "E:/obscure/tremendous-transit/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
