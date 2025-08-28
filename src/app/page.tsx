import InlineLogo from "@/components/frequents/inline-logo";
import UnderlinedLink from "@/components/frequents/underlined-link";
import PostLink from "@/components/posts/post-link";
import { getLatestPosts } from "@/lib/blog/get-posts";
import Link from "next/link";

export default function Home() {
  const latestPosts = getLatestPosts();

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <p>
          Software engineer located in the UK, mainly working with TypeScript
          and Next.js.
        </p>
        <p>
          Conviction in and shipping{" "}
          <Link href="https://sk8er.xyz" target="_blank">
            <InlineLogo
              src="/images/icons/sk8er.png"
              alt="sk8er.xyz icon"
              width={40}
            />
          </Link>
          , the upcoming largest skateboarding social network.
        </p>
        <p>
          Learn a little more about me{" "}
          <UnderlinedLink blue href="/who">
            here
          </UnderlinedLink>{" "}
          or hit me up{" "}
          <UnderlinedLink blue href="/contact">
            here
          </UnderlinedLink>
          .
        </p>
      </div>
      {latestPosts.length !== 0 && (
        <div className="space-y-3">
          <p className="font-bold">What&apos;s been going on:</p>
          {latestPosts.map((post) => (
            <PostLink key={post.slug} postDetails={post} />
          ))}
        </div>
      )}
    </div>
  );
}
