import UnderlinedLink from "@/components/frequents/underlined-link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <p>
          Software engineer located in the UK, working with TypeScript
          (alongside Next.js and React), Python, and Java.
        </p>
        <p>
          2025 Computer Science graduate with experience in full-stack
          development.
        </p>
        <p>Looking for a full-time role in tech.</p>
        <p>
          Please contact me at <b>hmw.geo@gmail.com</b> for any inquiries or
          opportunities.
        </p>
      </div>
      <div className="space-y-3">
        <p>
          <b>Projects:</b>
        </p>
        <p className="flex items-start gap-2">
          <span>&#62;</span>
          <span>
            <Image
              src="/images/icons/ktool.png"
              height={60}
              width={60}
              alt="K-Tool Engineering logo"
              className="inline-block"
            />
            : company website for precision engineering firm.{" "}
            <UnderlinedLink href="https://ktoolengineering.com" newTab blue>
              [url]
            </UnderlinedLink>
          </span>
        </p>
        <p className="flex items-start gap-2">
          <span> &#62;</span>
          <span>
            <Image
              src="/images/icons/rsvpy.png"
              height={22}
              width={22}
              alt="rsvpy logo"
              className="inline-block"
            />
            : software solution for efficient event management.{" "}
            <UnderlinedLink href="https://rsvpy.lol" newTab blue>
              [url]
            </UnderlinedLink>
          </span>
        </p>
        <p className="flex items-start gap-2">
          <span> &#62;</span>
          <span>
            <Image
              src="/images/icons/mobvis.png"
              height={20}
              width={20}
              alt="mobVis logo"
              className="inline-block align-sub"
            />
            : dissertation project on visualising mobility data for treating
            multiple sclerosis.{" "}
            <UnderlinedLink
              href="https://github.com/g30rg3hum/mobVis"
              newTab
              blue
            >
              [url]
            </UnderlinedLink>{" "}
            <UnderlinedLink
              href="/pdfs/final_dissertation_report.pdf"
              newTab
              download
              blue
            >
              [pdf]
            </UnderlinedLink>
          </span>
        </p>
      </div>
      <div className="space-y-3">
        <p className="font-bold">Work experience:</p>
        <p className="flex items-start gap-2">
          <span>&#62;</span>
          <span>
            <Image
              src="/images/icons/goodlord.jpeg"
              alt="Goodlord logo"
              width={20}
              height={20}
              className="inline-block"
            />
            : summer software engineering internship at UK prop-tech firm.{" "}
            <UnderlinedLink href="https://www.goodlord.co/" newTab blue>
              [url]
            </UnderlinedLink>
          </span>
        </p>
        <p className="flex items-start gap-2">
          <span>&#62;</span>
          <span>
            <Image
              src="/images/icons/nipponprinting.png"
              alt="Nippon Printing logo"
              width={20}
              height={20}
              className="inline-block"
            />
            : seasonal production and admin employee at Malaysian packaging and
            printing company.
          </span>
        </p>
      </div>
      <div className="space-y-3">
        <p className="font-bold">Academia:</p>
        <p className="flex items-start gap-2">
          <span>&#62;</span>
          <span>
            <Image
              src="/images/icons/uos.png"
              alt="University of Sheffield logo"
              width={18}
              height={18}
              className="inline-block"
            />
            : 2025 Computer Science graduate at The University of Sheffield with
            First-Class Honours (80% average).
          </span>
        </p>
        <p className="flex items-start gap-2">
          <span>&#62;</span>
          <span>
            <Image
              src="/images/icons/uplands.png"
              alt="The International School of Penang (Uplands) logo"
              width={18}
              height={18}
              className="inline-block"
            />
            : completed The International Baccalaureate Diploma Programme (IBDP)
            with 35/45 points (HL Maths AA, Computer Science, Economics: 6, 6,
            6) (SL English, German, Film: 5, 5, 5) at The International School
            of Penang (Uplands).
          </span>
        </p>
        <p className="flex items-start gap-2">
          <span>&#62;</span>
          <span>
            <Image
              src="/images/icons/uplands.png"
              alt="The International School of Penang (Uplands) logo"
              width={18}
              height={18}
              className="inline-block"
            />
            : finished IGCSEs with 8 A*&apos;s and 2 A&apos;s.
          </span>
        </p>
      </div>
    </div>
  );
}
