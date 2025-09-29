import InlineLogo from "@/components/frequents/inline-logo";
import UnderlinedLink from "@/components/frequents/underlined-link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="font-bold">
          <InlineLogo
            src="/images/icons/sk8er.png"
            alt="sk8er.xyz icon"
            width={40}
          />{" "}
          <span className="font-normal">
            {`{08-2025 -> in progress}`}{" "}
            <UnderlinedLink newTab blue href="https://sk8er.xyz">
              [progress]
            </UnderlinedLink>
          </span>
        </h2>
        <p>Developing the next biggest social media platform for skaters.</p>
      </div>
      <div className="space-y-1">
        <h2 className="font-bold">
          <InlineLogo src="/images/icons/ktool.png" alt="K-TOOL icon" /> K-TOOL{" "}
          <span className="font-normal">
            {`{07-2025 -> in progress}`}{" "}
            <UnderlinedLink
              newTab
              blue
              href="https://k-tool-revamp.vercel.app/"
            >
              [progress]
            </UnderlinedLink>
          </span>
        </h2>
        <p>Working on a company website for a precision manufacturing firm.</p>
      </div>
      <div className="space-y-1">
        <h2 className="font-bold">
          <InlineLogo src="/images/icons/rsvpy.png" alt="rsvpy icon" /> rsvpy{" "}
          <span className="font-normal">
            {`{05 -> 07, 2025}`}{" "}
            <UnderlinedLink newTab blue href="https://rsvpy.lol">
              [app]
            </UnderlinedLink>
          </span>
        </h2>
        <div className="space-y-3">
          <p>
            With some spare time during my preparation for my last set of
            university exams, I started working on rsvpy. During my time in
            university, I noticed a real problem with how societies and casual
            groups managed event attendance and payments. They would
            inefficiently track these using WhatsApp messages, with attendees
            having to copy the previous message to add their names or mark
            themselves as paid. rsvpy aims to solve this problem by providing an
            all-in-one and simple platform for managing all of this, with
            additional useful features like email reminders for event
            information updates or events occurring on the next day.
          </p>
          <p>
            <b>Technologies used:</b> {nextJsIcon} Next.js, {tailwindIcon}{" "}
            Tailwind, {daisyUiIcon} daisyUI, {nextAuthIcon} NextAuth,{" "}
            {prismaPostgresIcon} Prisma Postgres, {resendIcon} Resend
          </p>
        </div>
      </div>
      <div className="space-y-1">
        <h2 className="font-bold">
          <InlineLogo src="/images/icons/mobvis.svg" alt="mobVis icon" /> mobVis{" "}
          <span className="font-normal">
            {`{09-2024 -> 05-2025}`}{" "}
            <UnderlinedLink
              newTab
              blue
              href="https://github.com/g30rg3hum/mobVis"
            >
              [repo]
            </UnderlinedLink>
          </span>
        </h2>
        <div className="space-y-3">
          <p>
            This was my university final-year dissertation project, focusing on
            creating a visualisation interface to help patients with multiple
            sclerosis track their mobility. Mobility impairment is one of the
            primary concerns for such patients, and to able to maintain
            mobility, it is important to be able to measure and track it.
          </p>
          <p>
            Therefore, I created a web-based application that allowed clinicians
            to upload CSV files of walking data from patients (collected using
            IMU sensor devices), and automatically generate useful
            visualisations to help form insightful conclusions about the
            patients&apos; mobility. The app also allows clinicians to tinker
            with the visualisations&apos; settings to create different
            perspectives of the data.
          </p>
          <p>
            Additionally, to ensure that the project was successful and ran
            smoothly, I followed the software lifecycle and implemented an
            involved creating an initial set of requirements (from early
            literature review) and mockups, collecting feedback from real
            clinicians, and then iterating based on such feedback.
          </p>
          <p>
            In the end, I was awarded a distinction (scoring 80%) for both the
            report and final product, with excitement being shown by real
            clinicians to extend the work further, during the evaluation process
            of the final product.
          </p>
          <p>
            <b>Technologies used:</b> {nextJsIcon} Next.js, {d3JsIcon} D3.js,{" "}
            {mobgapIcon} mobgap, {fastApiIcon} FastAPI
          </p>
        </div>
      </div>
      <div className="space-y-1">
        <h2 className="font-bold">
          <InlineLogo
            src="/images/icons/rakankertas.png"
            alt="Rakan Kertas icon"
          />{" "}
          Rakan Kertas{" "}
          <span className="font-normal">
            {`{09 -> 11, 2024}`}{" "}
            <UnderlinedLink newTab blue href="https://rakankertas.com">
              [url]
            </UnderlinedLink>
          </span>
        </h2>
        <div className="space-y-3">
          <p>
            Rakan Kertas is a recycling firm based in Malaysia, and they
            required a new company website to showcase their services. Their old
            website was outdated and unprofessional, bounded by the limitations
            of WordPress.
          </p>
          <p>
            I therefore designed and implemented a new website for them,
            frequently communicating with them to understand what they do and
            what their needs were surrounding the website.
          </p>
          <p>
            I provide continued maintenance and updates to their website, such
            as SEO improvements to increase visibility and traffic.
          </p>
          <p>
            This was a great project that allowed me to further develop my
            skills in web development and client communication. Being
            compensated for my work also helped me to be confident in my ability
            to deliver real value to real businesses.
          </p>
          <p>
            <b>Technologies used:</b> {nextJsIcon} Next.js, {tailwindIcon}{" "}
            Tailwind, {motionIcon} Motion, {shadcnIcon} shadcn
          </p>
        </div>
      </div>
    </div>
  );
}

// icons
const nextJsIcon = (
  <InlineLogo src="/images/icons/nextjs.svg" alt="Next.js icon" />
);
const tailwindIcon = (
  <InlineLogo
    src="/images/icons/tailwind.png"
    alt="Tailwind CSS icon"
    align="middle"
  />
);
const daisyUiIcon = (
  <InlineLogo src="/images/icons/daisyui.png" alt="daisyUI icon" />
);
const nextAuthIcon = (
  <InlineLogo src="/images/icons/next-auth.png" alt="NextAuth.js icon" />
);
const prismaPostgresIcon = (
  <InlineLogo
    src="/images/icons/prisma-postgres.png"
    alt="Prisma Postgres icon"
  />
);
const resendIcon = (
  <InlineLogo
    src="/images/icons/resend.svg"
    alt="Resend icon"
    width={23}
    align="middle"
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
