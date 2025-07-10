import { postFileNames, postsDirectory } from "@/lib/constants";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import UnderlinedLink from "@/components/frequents/underlined-link";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="space-y-3">
      {posts.map((post, index) => (
        <UnderlinedLink key={index} href={`/blog/${post.slug}`}>
          {post.frontMatter.title} ({post.frontMatter.date})
        </UnderlinedLink>
      ))}
    </div>
  );
}

function getPosts() {
  const posts = postFileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      // get content
      const content = fs.readFileSync(path.join(postsDirectory, fileName));

      // extract metadata
      const { data: frontMatter } = matter(content);

      return {
        frontMatter,
        slug: fileName.replace(/\.mdx$/, ""),
      };
    });

  return posts;
}
