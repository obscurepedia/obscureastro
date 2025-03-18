import { c as createComponent, d as createAstro, a as addAttribute, r as renderHead, u as unescapeHTML, e as renderSlot, b as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BDvNDvr9.mjs';
import 'kleur/colors';
import 'clsx';
import { marked } from 'marked';
/* empty css                                     */
import { g as getCollection } from '../../chunks/_astro_content_w6kU0Qd-.mjs';
import { q as queryDatabase } from '../../chunks/database_BlSdePJv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Post;
  const post = Astro2.props.post;
  console.log("\u{1F4CC} Debug: Astro.props.post:", post);
  const postHTML = post.body ? marked(post.body) : "";
  return renderTemplate`<html> <head><title>${post.data.title}</title><meta name="description"${addAttribute(post.data.excerpt || "An article from Obscurepedia", "content")}>${renderHead()}</head> <body class="post-page"> <header> <img src="/logo1.png" alt="Obscurepedia Logo" width="350"> <nav> <ul> <li><a href="/">Home</a></li> <li><a href="/posts">Posts</a></li> <li><a href="/categories">Categories</a></li> </ul> </nav> </header> <article class="post-container"> <h1 class="post-title">${post.data.title}</h1> <p class="post-date">
Published on: ${new Date(post.data.date).toLocaleDateString()} </p> ${post.data.featured_image && renderTemplate`<img${addAttribute(post.data.featured_image, "src")}${addAttribute(post.data.title, "alt")} class="featured-image">`}  <div class="post-content">${unescapeHTML(postHTML)}</div>  ${renderSlot($$result, $$slots["default"])} </article> <footer> <nav> <ul> <li><a href="/privacy-policy/">Privacy Policy</a></li> <li><a href="/terms-of-service/">Terms of Service</a></li> </ul> </nav> </footer> </body></html>`;
}, "E:/obscure/tremendous-transit/src/layouts/Post.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const posts = await getCollection("posts");
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(`\u274C Post not found for slug: ${slug}`);
  }
  post.body ? marked(post.body) : "";
  const filenameShort = slug.replace(".md", "");
  console.log("filenameShort derived from slug:", filenameShort);
  let articleUrl = "";
  try {
    const dbResult = await queryDatabase(
      "SELECT id FROM generated_posts WHERE filename_short = $1",
      [filenameShort]
    );
    if (dbResult.rows.length === 0) {
      console.warn(`No matching record found in generated_posts for ${filenameShort}`);
    } else {
      const numericId = dbResult.rows[0].id;
      console.log("Database numeric ID:", numericId);
      const baseUrl = process.env.BASE_URL || "http://localhost:4321";
      const response = await fetch(`${baseUrl}/api/get_facebook_post_url?generated_post_id=${numericId}`);
      const data = await response.json();
      articleUrl = data.article_url;
      console.log("Fetched articleUrl:", articleUrl);
    }
  } catch (error) {
    console.error("\u274C Error during DB lookup or API fetch:", error);
  }
  return renderTemplate`<!-- 
  ✅ 8. Pass the comment box as a child to PostLayout.
  Make sure PostLayout uses <slot/> in its markup so the
  button appears within the main content area.
-->${renderComponent($$result, "PostLayout", $$Post, { "post": post }, { "default": async ($$result2) => renderTemplate`${articleUrl && renderTemplate`${maybeRenderHead()}<div style="text-align: center; margin-top: 40px;"> <div style="margin-bottom: 20px;"> <a${addAttribute(articleUrl, "href")} target="_blank" rel="noopener noreferrer"> <button style="
              padding: 10px 20px; 
              font-size: 16px; 
              background-color: #3b5998; 
              color: white; 
              border: none; 
              border-radius: 5px;
            ">
Comment on Facebook
</button> </a> </div> </div>`}` })}`;
}, "E:/obscure/tremendous-transit/src/pages/posts/[slug].astro", void 0);

const $$file = "E:/obscure/tremendous-transit/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
