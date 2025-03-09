import { sql } from 'astro:db';

export async function getRecentFacebookPost(postId) {
  const result = await sql`
    SELECT article_url FROM facebook_posts
    WHERE generated_post_id = ${postId}
    ORDER BY last_posted DESC
    LIMIT 1;
  `;

  return result.length > 0 ? result[0].article_url : null;
}
