import { postFileNames, postsDirectory } from "@/lib/constants";
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import SpaceBetween from "@/components/posts/space-between";

interface ComponentProps {
  children: React.ReactNode;
}
const components = {
  SpaceBetween,
  ul: ({ children }: ComponentProps) => (
    <ul className="list-disc ml-3">{children}</ul>
  ),
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const source = getPostSource(slug);
  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
  }>({
    source: source,
    components: components,
    options: {
      parseFrontmatter: true,
    },
  });

  return (
    <div>
      <div className="mb-3">
        <h2 className="font-bold">{frontmatter.title}</h2>
        <p className="text-xs">{frontmatter.date}</p>
      </div>

      {content}
    </div>
  );
}

function getPostSource(slug: string) {
  const source = fs.readFileSync(path.join(postsDirectory, `${slug}.mdx`));

  return source;
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
