import { postFileNames, postsDirectory } from "../constants";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FrontMatter, PostDetails } from "./types/data";

export default function getPostsDetails(): PostDetails[] {
  const posts = postFileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      // get content
      const content = fs.readFileSync(path.join(postsDirectory, fileName));

      // extract metadata
      const { data } = matter(content);

      const { title, date, tags } = data;

      if (!title || !date || !tags) {
        throw new Error(`Missing front matter fields in ${fileName}`);
      }

      // convert the front matter into valid types and variables
      const frontMatter: FrontMatter = {
        title,
        date: new Date(date),
        tags: tags.split(","),
      };

      return {
        ...frontMatter,
        slug: fileName.replace(/\.mdx$/, ""),
      };
    });

  return posts;
}

export function getLatestPosts(limit = 3) {
  const posts = getPostsDetails();

  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts.slice(0, limit);
}
