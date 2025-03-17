import { queryDatabase } from '../../lib/database';

export async function GET({ request }) {
  console.log("Request URL:", request.url);

  // Try both the standard method and a fallback using string splitting
  let generated_post_id = new URL(request.url).searchParams.get("generated_post_id");

  // Fallback: extract the query string manually if necessary
  if (!generated_post_id) {
    const qs = request.url.split("?")[1];
    console.log("Raw query string:", qs);
    if (qs) {
      generated_post_id = new URLSearchParams(qs).get("generated_post_id");
    }
  }

  console.log("Extracted generated_post_id:", generated_post_id);

  if (!generated_post_id) {
    return new Response(
      JSON.stringify({ error: "Missing generated_post_id" }),
      { status: 400 }
    );
  }

  try {
    const result = await queryDatabase(
      "SELECT article_url FROM generated_posts WHERE id = $1",
      [generated_post_id]
    );

    if (result.rows.length > 0) {
      return new Response(
        JSON.stringify({ article_url: result.rows[0].article_url }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Generated post not found." }),
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("❌ Error fetching Facebook post URL:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching Facebook post URL." }),
      { status: 500 }
    );
  }
}
