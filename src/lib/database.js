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
