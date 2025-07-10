import { postFileNames } from "@/lib/constants";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/posts/${slug}.mdx`);

  return <Post />;
}

// only generates routes for posts that exist.
export function generateStaticParams() {
  // get all posts from the posts directory
  try {
    // return slug array
    return postFileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => ({
        slug: fileName.replace(/\.mdx$/, ""),
      }));
  } catch (error) {
    console.error("Error reading posts directory: ", error);
    return [];
  }
}

export const dynamicParams = false;
