import { c as createComponent, f as renderComponent, b as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BDvNDvr9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BoRSSle4.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<h1 id=\"privacy-policy\">Privacy Policy</h1>\n<p><em>Last updated: 9 March 2025</em></p>\n<p>Welcome to Obscurepedia! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>\n<h2 id=\"1-information-we-collect\">1. Information We Collect</h2>\n<ul>\n<li><strong>Personal Information</strong>: When you sign up, we may collect your name, email address, and other details.</li>\n<li><strong>Usage Data</strong>: We collect information on how you interact with our site to improve user experience.</li>\n</ul>\n<h2 id=\"2-how-we-use-your-information\">2. How We Use Your Information</h2>\n<p>We use collected data to:</p>\n<ul>\n<li>Provide and improve our services.</li>\n<li>Personalize user experience.</li>\n<li>Send updates or promotional emails (if subscribed).</li>\n</ul>\n<h2 id=\"3-third-party-services\">3. Third-Party Services</h2>\n<p>We may use third-party services (e.g., analytics, payment processors) that may collect data. Please refer to their respective privacy policies.</p>\n<h2 id=\"4-cookies\">4. Cookies</h2>\n<p>We use cookies to enhance site performance. You can disable cookies in your browser settings.</p>\n<h2 id=\"5-data-security\">5. Data Security</h2>\n<p>We implement measures to protect your personal information but cannot guarantee absolute security.</p>\n<h2 id=\"6-your-rights\">6. Your Rights</h2>\n<p>You can request to access, modify, or delete your personal data. Contact us at [your email].</p>\n<h2 id=\"7-changes-to-this-policy\">7. Changes to This Policy</h2>\n<p>We may update this policy from time to time. Changes will be posted here.</p>\n<h2 id=\"8-contact-us\">8. Contact Us</h2>\n<p>If you have any questions, reach out to us at <strong><a href=\"mailto:obscurepedia2025@gmail.com\">obscurepedia2025@gmail.com</a></strong>.</p>";

				const frontmatter = {"layout":"../layouts/Layout.astro","title":"Privacy Policy"};
				const file = "E:/obscure/tremendous-transit/src/pages/privacy-policy.md";
				const url = "/privacy-policy";
				function rawContent() {
					return "   \r\n                               \r\n                       \r\n   \r\n\r\n# Privacy Policy\r\n\r\n_Last updated: 9 March 2025_\r\n\r\nWelcome to Obscurepedia! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information.\r\n\r\n## 1. Information We Collect\r\n- **Personal Information**: When you sign up, we may collect your name, email address, and other details.\r\n- **Usage Data**: We collect information on how you interact with our site to improve user experience.\r\n\r\n## 2. How We Use Your Information\r\nWe use collected data to:\r\n- Provide and improve our services.\r\n- Personalize user experience.\r\n- Send updates or promotional emails (if subscribed).\r\n\r\n## 3. Third-Party Services\r\nWe may use third-party services (e.g., analytics, payment processors) that may collect data. Please refer to their respective privacy policies.\r\n\r\n## 4. Cookies\r\nWe use cookies to enhance site performance. You can disable cookies in your browser settings.\r\n\r\n## 5. Data Security\r\nWe implement measures to protect your personal information but cannot guarantee absolute security.\r\n\r\n## 6. Your Rights\r\nYou can request to access, modify, or delete your personal data. Contact us at [your email].\r\n\r\n## 7. Changes to This Policy\r\nWe may update this policy from time to time. Changes will be posted here.\r\n\r\n## 8. Contact Us\r\nIf you have any questions, reach out to us at **obscurepedia2025@gmail.com**.\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"privacy-policy","text":"Privacy Policy"},{"depth":2,"slug":"1-information-we-collect","text":"1. Information We Collect"},{"depth":2,"slug":"2-how-we-use-your-information","text":"2. How We Use Your Information"},{"depth":2,"slug":"3-third-party-services","text":"3. Third-Party Services"},{"depth":2,"slug":"4-cookies","text":"4. Cookies"},{"depth":2,"slug":"5-data-security","text":"5. Data Security"},{"depth":2,"slug":"6-your-rights","text":"6. Your Rights"},{"depth":2,"slug":"7-changes-to-this-policy","text":"7. Changes to This Policy"},{"depth":2,"slug":"8-contact-us","text":"8. Contact Us"}];
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
