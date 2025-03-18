export { renderers } from '../../renderers.mjs';

const prerender = false; // 🚨 This makes it a dynamic API route

async function GET({ request }) {
  console.log("Request URL:", request.url);
  
  const url = new URL(request.url);
  const test_param = url.searchParams.get("test_param");

  console.log("Extracted test_param:", test_param);

  return new Response(
    JSON.stringify({
      received: test_param || "No test_param provided"
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
