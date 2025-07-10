import path from "path";
import fs from "fs";

export const postsDirectory = path.join(process.cwd(), "src/posts");
export const postFileNames = fs.readdirSync(postsDirectory);
