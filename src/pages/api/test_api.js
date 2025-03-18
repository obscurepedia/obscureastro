export const prerender = false; // 🚨 This makes it a dynamic API route

export async function GET({ request }) {
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
