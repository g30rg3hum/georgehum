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
          ways to approach and digitally solve real problems. I can get stuck in
          and time passes differently.
        </p>
        <p>
          Away from all the technology, I also get euphoric over being active. I
          love to lift, kick balls, smack balls, boulder, and skate.
        </p>
        <p>
          Here&apos;s me in Madrid and my churros that I&apos;m boutta dip in
          hot chocolate -{" "}
        </p>
      </div>

      <Image
        src="/images/personal/churros.png"
        height="250"
        width="250"
        alt="Me with chocolate churros"
        className="mx-auto"
      />
    </div>
  );
}
