import { c as createComponent, d as createAstro, f as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderSlot, a as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_BDvNDvr9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BoRSSle4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$TeaserLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeaserLayout;
  const { title, excerpt, featured_image } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-3xl mx-auto px-4 py-8"> ${featured_image && renderTemplate`<img${addAttribute(featured_image, "src")} class="rounded-lg mb-6"${addAttribute(title, "alt")}>`} <h1 class="text-3xl font-bold mb-4">${title}</h1> ${excerpt && renderTemplate`<p class="text-lg italic mb-4">${excerpt}</p>`} ${renderSlot($$result2, $$slots["default"])} </article> ` })}`;
}, "E:/obscure/tremendous-transit/src/layouts/TeaserLayout.astro", void 0);

const html = () => "<p>Discover the uncanny truth - we’re more bacteria than human! Delve into an unseen world within you, teeming with trillions of microscopic creatures, governing your health and mood. Dare to explore this microbial metropolis? Click and read on!</p>";

				const frontmatter = {"title":"Are You More Bacteria Than Human? Discover This Baffling Truth!","slug":"are-you-more-bacteria-than-human-discover-this-baffling-truth","layout":"../../layouts/TeaserLayout.astro"};
				const file = "E:/obscure/tremendous-transit/src/pages/teasers/are-you-more-bacteria-than-human-discover-this-baffling-truth.md";
				const url = "/teasers/are-you-more-bacteria-than-human-discover-this-baffling-truth";
				function rawContent() {
					return "   \r\n                                                                        \r\n                                                                   \r\n                                        \r\n   \r\n\r\nDiscover the uncanny truth - we're more bacteria than human! Delve into an unseen world within you, teeming with trillions of microscopic creatures, governing your health and mood. Dare to explore this microbial metropolis? Click and read on!\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$TeaserLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
