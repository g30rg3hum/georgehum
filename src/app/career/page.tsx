import InlineLogo from "@/components/frequents/inline-logo";

export default function CareerPage() {
  return (
    <div>
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="font-bold">
            <InlineLogo src="/images/icons/goodlord.jpeg" alt="Goodlord icon" />{" "}
            Goodlord <span className="font-normal">{`{07 -> 08, 2024}`}</span>
          </h2>
          <div className="space-y-3">
            <p>
              This was my entry into the world of tech - a 9-week summer
              software engineering internship at Goodlord, a UK prop-tech firm.
              I worked at the Sheffield office, but also travelled down to
              London to learn more about company-wide operations. The internship
              was a very valuable and core experience for me. I proved to myself
              that I could deliver real value to real customers with my skills
              and knowledge. I was also pushed to be a more adaptable software
              engineer, and dive head-first into unfamiliar code and
              technologies.
            </p>
            <p>
              During the internship, I took on real tickets early, fixing bugs
              but also developing new features for actual products. The main
              project involved collaborating with another intern to implement a
              full-stack data collection system for new lettings agency signups.
            </p>
            <p>
              Naturally, I was also able to apply Agile practices for the first
              time. This consisted of attending daily stand-up meetings,
              conducting sizing sessions, working in sprints, code reviews, and
              progressing tickets step-by-step from the backlog to completion.
            </p>
            <p>
              I used React for the front-end and Symfony for the back-end.
              Automated tests were also created for all new features/changes,
              using Jest, React Testing Library and PHPUnit.
            </p>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="font-bold">
            <InlineLogo
              src="/images/icons/nipponprinting.png"
              alt="Nippon Printing icon"
            />{" "}
            Nippon Printing{" "}
            <span className="font-normal">{`{2016 -> 2020}`}</span>
          </h2>
          <div className="space-y-3">
            <p>
              As a teenager, I worked at my mother&apos;s packaging and printing
              firm any time I had any sort of school break. By helping on, I was
              able to learn core workplace skills. I engaged in manual labour,
              involving tearing packaging from their cutouts, assembling them by
              hand, and packing them into delivery boxes ready to be
              transported. I also frequently did admin work, such as keying in
              sales information into spreadsheets, sorting and filing documents,
              and mapping out quotations and invoices for customers. It was here
              where I learned the inevitable lesson of basic hardwork and grit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
