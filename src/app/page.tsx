import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-6 text-justify">
      <div className="space-y-3">
        <p>
          I&apos;m a boy from the little island of Penang, located in Malaysia.
          I love to enjoy life, experience new things, push past limits, and
          pick apart unfamiliar challenges.
        </p>
        <p>
          I've completed a Bachelor's degree in Computer Science at The
          University of Sheffield (kudos to my single mother for giving me the
          opportunity) with a First Class Honours. Although I have a vendetta
          against universities and the general education system, I like to think
          that this at least demonstrates my ability to learn and work hard.
        </p>
        <p>
          I&apos;m a person of many values, with the ones I stick by the most
          being:{" "}
          <b>
            to always enjoy every single, fleeting moment I've been granted by
            the grace of god, be true to myself, think positive, take risks and
            savour the thrill of uncertainty and danger, and prioritise action
            with acceptance of the beauty of imperfection.
          </b>{" "}
          My values and ideas help guide me to live a life that I'm not only
          proud of, but also enjoy waking up to every day.
        </p>
        <p>
          I&apos;d love to say that I'm extremely passionate and tunnel-visioned
          in tech, but that is not the case. Programming and building in tech is
          just one of the many things I enjoy doing. My hobbies are varied and I
          always love to embark on new ones. Some current ones include playing
          football, skating, bouldering, lifting, calisthenics, writing, and
          creating content. There are still lots of things I want to try - with
          coffee-making being at the top of my Notes app at the time of writing.
        </p>
        <p>
          ESKETIT!!!{" "}
          <Image
            src="/images/lil-pump-emoji.png"
            alt="lil pump emoji"
            width="30"
            height="30"
            className="inline-block"
          />
        </p>
      </div>
    </div>
  );
}
