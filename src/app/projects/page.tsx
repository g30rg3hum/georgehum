import UnderlinedLink from "@/components/frequents/underlined-link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div>
      <div className="space-y-5">
        <div>
          <h2 className="font-bold">
            <Image
              src="/images/icons/ktool.png"
              width="20"
              height="20"
              alt="K-TOOL icon"
              className="inline-block"
            />{" "}
            K-TOOL{" "}
            <span className="font-normal">(July 2025 - in progress)</span>{" "}
            <UnderlinedLink newTab blue href="https://k-tool.vercel.app/">
              Progress
            </UnderlinedLink>
          </h2>
          <p>
            Currently working on a company website for a precision manufacturing
            firm.
          </p>
        </div>
        <div>
          <h2 className="font-bold">
            <Image
              src="/images/icons/rsvpy.png"
              width="20"
              height="20"
              alt="rsvpy icon"
              className="inline-block"
            />{" "}
            rsvpy <span className="font-normal">(May - July 2025)</span>{" "}
            <UnderlinedLink newTab blue href="https://rsvpy.lol">
              App
            </UnderlinedLink>
          </h2>
          <div className="space-y-3">
            <p>
              With some spare time during my preparation for my last set of
              university exams, I started working on rsvpy. During my time in
              university, I noticed a real problem with how societies and groups
              managed event attendance and payments. They would inefficiently
              track these using WhatsApp messages, with attendees having to copy
              the previous message to add their names or mark themselves as
              paid. rsvpy aims to solve this problem by providing an all-in-one
              and simple platform for managing all of this, with additional
              useful features like email notifications and reminders for event
              updates or events occurring on the next day.
            </p>
            <p>
              <b>Technologies used:</b> {nextJsIcon} Next.js, {tailwindIcon}{" "}
              Tailwind, {daisyUiIcon} daisyUI, {nextAuthIcon} NextAuth,{" "}
              {prismaPostgresIcon} Prisma Postgres, {resendIcon} Resend
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-bold">
            <Image
              src="/images/icons/mobvis.svg"
              width="20"
              height="20"
              alt="rsvpy icon"
              className="inline-block"
            />{" "}
            mobVis <span className="font-normal">(Sep 2024 - May 2025)</span>{" "}
            <UnderlinedLink
              newTab
              blue
              href="https://github.com/g30rg3hum/mobVis"
            >
              GitHub
            </UnderlinedLink>
          </h2>
          <div className="space-y-3">
            <p>
              This was my university final-year dissertation project, focusing
              on creating a visualisation interface to help patients with
              multiple sclerosis track their mobility. Mobility impairment is
              one of the primary concerns/issues for such patients, and to able
              to maintain mobility, it is important to be able to measure and
              track it.
            </p>
            <p>
              Therefore, I created a web-based application that allowed
              clinicians to upload walking CSV data from patients (collected
              from IMU sensor devices), and automatically generate useful
              visualisations to help form useful conclusions about the
              patients&apos; mobility. The app also allows clinicians to tinker
              with the visualisations&apos; settings to create different
              views/perspectives of the data.
            </p>
            <p>
              Additionally, to ensure that the project was successful and ran
              smoothly, I followed the software lifecycle and followed an
              iterative, user-centred design approach. This involved creating an
              initial set of requirements (from initial literature review) and
              mockups, collecting feedback from real clinicians, and then
              iterating based on such feedback.
            </p>
            <p>
              In the end, I was awarded a distinction (a score of 80%) for both
              the report and final product, with excitement being shown by real
              clinicians to extend the work further, during the evaluation
              process of the final product.
            </p>
            <p>
              <b>Technologies used:</b> {nextJsIcon} Next.js, {d3JsIcon} D3.js,{" "}
              {mobgapIcon} mobgap, {fastApiIcon} FastAPI
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-bold">
            <Image
              src="/images/icons/rakankertas.png"
              width="20"
              height="20"
              alt="Rakan Kertas icon"
              className="inline-block"
            />{" "}
            Rakan Kertas <span className="font-normal">(Sep - Nov 2024)</span>{" "}
            <UnderlinedLink newTab blue href="https://rakankertas.com">
              Website
            </UnderlinedLink>
          </h2>
          <div className="space-y-3">
            <p>
              Rakan Kertas is a recycling firm based in Malaysia, and they
              required a new company website to showcase their services. Their
              old website was outdated and unprofessional, bounded by the
              limitations of WordPress.
            </p>
            <p>
              I therefore designed and implemented a new website for them,
              frequently communicating with one of their representatives to
              understand what they do and what their needs were surrounding the
              website.
            </p>
            <p>
              To this day, I continue to maintain and add new features to the
              website, if they so request.
            </p>
            <p>
              This was a great project that allowed me to further develop my
              skills in web development and client communication. Being
              compensated for my work also helped me to be confident in my
              ability to deliver real value to real people.
            </p>
            <p>
              <b>Technologies used:</b> {nextJsIcon} Next.js, {tailwindIcon}{" "}
              Tailwind, {motionIcon} Motion, {shadcnIcon} shadcn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// icons
const nextJsIcon = (
  <Image
    src="/images/icons/nextjs.svg"
    width="20"
    height="20"
    alt="Next.js icon"
    className="inline-block"
  />
);
const tailwindIcon = (
  <Image
    src="/images/icons/tailwind.png"
    width="20"
    height="20"
    alt="Tailwind CSS icon"
    className="inline-block"
  />
);
const daisyUiIcon = (
  <Image
    src="/images/icons/daisyui.png"
    width="20"
    height="20"
    alt="daisyUI icon"
    className="inline-block"
  />
);
const nextAuthIcon = (
  <Image
    src="/images/icons/next-auth.png"
    width="20"
    height="20"
    alt="NextAuth.js icon"
    className="inline-block"
  />
);
const prismaPostgresIcon = (
  <Image
    src="/images/icons/prisma-postgres.png"
    width="20"
    height="20"
    alt="Prisma Postgres icon"
    className="inline-block"
  />
);
const resendIcon = (
  <Image
    src="/images/icons/resend.svg"
    width="20"
    height="20"
    alt="Resend icon"
    className="inline-block"
  />
);
const d3JsIcon = (
  <Image
    src="/images/icons/d3.png"
    width="20"
    height="20"
    alt="D3.js icon"
    className="inline-block"
  />
);
const mobgapIcon = (
  <Image
    src="/images/icons/mobgap.png"
    width="20"
    height="20"
    alt="mobgap icon"
    className="inline-block"
  />
);
const fastApiIcon = (
  <Image
    src="/images/icons/fastapi.svg"
    width="20"
    height="20"
    alt="FastAPI icon"
    className="inline-block"
  />
);
const motionIcon = (
  <Image
    src="/images/icons/motion.png"
    width="20"
    height="20"
    alt="Motion icon"
    className="inline-block"
  />
);
const shadcnIcon = (
  <Image
    src="/images/icons/shadcn.png"
    width="20"
    height="20"
    alt="shadcn icon"
    className="inline-block"
  />
);
