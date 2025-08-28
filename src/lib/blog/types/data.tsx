export interface FrontMatter {
  title: string;
  date: Date;
  tags: string[];
}

export interface PostDetails extends FrontMatter {
  slug: string;
}
