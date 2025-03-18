import { c as createComponent, f as renderComponent, b as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BDvNDvr9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BoRSSle4.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<h1 id=\"terms-of-service\">Terms of Service</h1>\n<p><em>Last updated: 9 March 2025</em></p>\n<p>Welcome to Obscurepedia! By accessing our website, you agree to these Terms of Service.</p>\n<h2 id=\"1-acceptance-of-terms\">1. Acceptance of Terms</h2>\n<p>By using our website, you accept these terms. If you do not agree, please do not use our services.</p>\n<h2 id=\"2-user-responsibilities\">2. User Responsibilities</h2>\n<ul>\n<li>You must be at least 13 years old to use this site.</li>\n<li>Do not engage in any illegal or harmful activities on our platform.</li>\n</ul>\n<h2 id=\"3-content-ownership\">3. Content Ownership</h2>\n<p>All original content on Obscurepedia belongs to us. You may not copy, modify, or redistribute without permission.</p>\n<h2 id=\"4-limitation-of-liability\">4. Limitation of Liability</h2>\n<p>We are not responsible for any damages resulting from the use of our website.</p>\n<h2 id=\"5-modifications-to-terms\">5. Modifications to Terms</h2>\n<p>We may update these terms at any time. Continued use of our site means you accept the changes.</p>\n<h2 id=\"6-contact-information\">6. Contact Information</h2>\n<p>For any questions, contact us at <strong><a href=\"mailto:obscurepedia2025@gmail.com\">obscurepedia2025@gmail.com</a></strong>.</p>";

				const frontmatter = {"layout":"../layouts/Layout.astro","title":"Terms of Service"};
				const file = "E:/obscure/tremendous-transit/src/pages/terms-of-service.md";
				const url = "/terms-of-service";
				function rawContent() {
					return "   \r\n                               \r\n                         \r\n   \r\n\r\n# Terms of Service\r\n\r\n_Last updated: 9 March 2025_\r\n\r\nWelcome to Obscurepedia! By accessing our website, you agree to these Terms of Service.\r\n\r\n## 1. Acceptance of Terms\r\nBy using our website, you accept these terms. If you do not agree, please do not use our services.\r\n\r\n## 2. User Responsibilities\r\n- You must be at least 13 years old to use this site.\r\n- Do not engage in any illegal or harmful activities on our platform.\r\n\r\n## 3. Content Ownership\r\nAll original content on Obscurepedia belongs to us. You may not copy, modify, or redistribute without permission.\r\n\r\n## 4. Limitation of Liability\r\nWe are not responsible for any damages resulting from the use of our website.\r\n\r\n## 5. Modifications to Terms\r\nWe may update these terms at any time. Continued use of our site means you accept the changes.\r\n\r\n## 6. Contact Information\r\nFor any questions, contact us at **obscurepedia2025@gmail.com**.\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"terms-of-service","text":"Terms of Service"},{"depth":2,"slug":"1-acceptance-of-terms","text":"1. Acceptance of Terms"},{"depth":2,"slug":"2-user-responsibilities","text":"2. User Responsibilities"},{"depth":2,"slug":"3-content-ownership","text":"3. Content Ownership"},{"depth":2,"slug":"4-limitation-of-liability","text":"4. Limitation of Liability"},{"depth":2,"slug":"5-modifications-to-terms","text":"5. Modifications to Terms"},{"depth":2,"slug":"6-contact-information","text":"6. Contact Information"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
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
