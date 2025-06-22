import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-12 text-justify">
      <div className="space-y-3">
        <p>
          I&apos;m a boy from the little island of Penang, located in Malaysia.
          I love to enjoy life, experience new things, push limits, and pick
          apart unfamiliar, novel challenges.
        </p>
        <p>
          I've completed a Bachelor's degree in Computer Science at The
          University of Sheffield with a First Class Honours.
        </p>
        <p>
          Solving real problems with code is just one of my many interests. I
          love to play football, skate, lift, show off with cool calisthenics
          tricks, boulder, make coffee and much more! I like to embark on and
          test new hobbies or even just new ways of doing things.
        </p>
        <p>
          This is my very own space where I can share my experiences (both
          career and personal), projects and personal opinions on whatever I
          feel like.
        </p>
        <Image
          src="/images/collage.png"
          alt="Collage of my hobbies"
          height="300"
          width="600"
          className="mt-12 mx-auto"
        />
      </div>
    </div>
  );
}
