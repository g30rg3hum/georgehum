import PostLink from "@/components/posts/post-link";
import getPostsDetails from "@/lib/blog/get-posts";

// TODO: implement title + tag search, pagination, comment system, notification subscription
export default function BlogPage() {
  const posts = getPostsDetails();

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <PostLink key={post.slug} postDetails={post} />
      ))}
    </div>
  );
}
