import { queryDatabase } from "./db"; // ✅ Ensure database connection is imported

export async function getDatabasePostId(filename) {
    try {
        console.log("📌 Debug: Querying database for filename:", filename);
        
        const result = await queryDatabase(
            `SELECT id FROM generated_posts WHERE filename = $1 LIMIT 1;`, 
            [filename] // ✅ Ensure we search by filename, not slug
        );

        console.log("📌 Debug: Query result:", result.rows);

        return result.rows.length ? result.rows[0].id : null;
    } catch (error) {
        console.error("❌ Error fetching post ID from database:", error);
        return null;
    }
}




export async function getRecentFacebookPost(postId) {
  try {
    const response = await fetch(`http://127.0.0.1:5001/api/get_recent_facebook_post?post_id=${postId}`);
    const data = await response.json();

    if (data.article_url) {
      return data.article_url;
    } else {
      return null;
    }
  } catch (error) {
    console.error("❌ Error fetching Facebook post URL:", error);
    return null;
  }
}
