import UnderlinedLink from "@/components/frequents/underlined-link";
import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-3">
      <p>
        I&apos;m a boy from the little island of Penang, located in Malaysia. I
        love to enjoy life, experience new things, take risks, and push limits.
      </p>
      <p>
        I studied in international schools in Penang leading up to my
        Bachelor&apos;s degree in Computer Science at The University of
        Sheffield, proudly graduating with a First Class Honours.
      </p>
      <p>
        Creating solutions ground-up to real problems with code is just one of
        my many interests. I also like anything that involves movement and
        outdoors. Mainly, I enjoy playing football, lifting, skating, and
        bouldering.
      </p>
      <p>
        <StarIcon className="size-5 inline-block mr-2 text-yellow-500" />
        At the time of writing, I&apos;m currently in the process of finding my
        place in the real world. Staying in Sheffield,{" "}
        <strong>
          I&apos;m looking for any full-time role (e.g. in the sales/service
          industry)
        </strong>{" "}
        to support myself, while I continue to break my way into tech, and build
        my skillset and portfolio. Keep up with my latest projects and career
        (AND LIFE!) ventures through my{" "}
        <UnderlinedLink className="text-sky-500" href="/blog">
          blog
        </UnderlinedLink>{" "}
        or social media (
        <UnderlinedLink
          className="text-sky-500"
          href="https://x.com/g3e0rg3e"
          newTab
        >
          X
        </UnderlinedLink>
        ,{" "}
        <UnderlinedLink
          className="text-sky-500"
          href="https://www.linkedin.com/in/georgehum/"
          newTab
        >
          LinkedIn
        </UnderlinedLink>
        , and{" "}
        <UnderlinedLink
          className="text-sky-500"
          href="https://www.instagram.com/george_huum/"
          newTab
        >
          Instagram
        </UnderlinedLink>
        )!
      </p>
      <Image
        src="/images/collage.png"
        alt="Collage of my hobbies"
        height="300"
        width="600"
        className="mt-12 mx-auto"
      />
    </div>
  );
}
