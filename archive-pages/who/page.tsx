import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <p>
          I&apos;m a boy from the little island of Penang, located in Malaysia.
          I love to have fun, learn, experience new things, take risks, and push
          limits.
        </p>
        <p>
          I studied in international schools in Penang leading up to my
          Bachelor&apos;s degree in Computer Science at The University of
          Sheffield, proudly graduating with a First Class Honours.
        </p>
        <p>
          I have fun coding and building, finding joy in looking for creative
          ways to approach and digitally solve real problems. I find it so easy
          to get stuck in, and time passes by so quickly.
        </p>
        <p>
          Away from all the technology, I keep sane by staying active. I love to
          lift, play football, boulder, and skate.
        </p>
      </div>

      <Image
        src="/images/personal/grad.png"
        height="250"
        width="250"
        alt="Graduation photo"
        className="mx-auto"
      />
    </div>
  );
}
