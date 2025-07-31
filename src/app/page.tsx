import UnderlinedLink from "@/components/frequents/underlined-link";
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
      <p>---</p>
      <p>
        📍 At the time of writing, I&apos;m currently on a mission to break my
        way into tech in the real world. I&apos;ve only recently graduated, and
        will be spending time with my wonderful family and friends at home in
        Malaysia, until mid-September, when I will make my way back again to the
        UK and begin my application for the graduate VISA.
      </p>
      <p>
        I&apos;m working hard to develop my own apps, to not only earn an income
        by delivering real value to real users, but also beef up my
        experience/résumé! Recently, I launched{" "}
        <UnderlinedLink blue href="https://rsvpy.lol">
          rsvpy
        </UnderlinedLink>
        , an app for organising events, solving a real problem of inefficiency
        in event management that I identified during my time at university.
      </p>
      <p>
        Now, I&apos;ve been contracted to build a company website for a super
        successful precision-engineering firm in Malaysia. Therefore, I&apos;m
        working on that alongside a job hunt tracker app that will obviously
        solve not only my own dilemma, but also help other struggling job
        seekers in the same boat!
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
