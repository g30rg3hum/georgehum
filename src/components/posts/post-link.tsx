import { PostDetails } from "@/lib/blog/types/data";
import UnderlinedLink from "../frequents/underlined-link";
import { convertDateToString } from "@/lib/helpers/dates";

interface Props {
  postDetails: PostDetails;
}
export default function PostLink({ postDetails }: Props) {
  const date = convertDateToString(postDetails.date);

  return (
    <div>
      <p>
        <UnderlinedLink href={`/blog/${postDetails.slug}`} blue>
          {postDetails.title}
        </UnderlinedLink>{" "}
        {`{${date}}`}{" "}
        {postDetails.tags.map((tag) => (
          <span key={tag}>[{tag}] </span>
        ))}
      </p>
    </div>
  );
}
