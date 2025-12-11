import UnderlinedLink from "@/components/frequents/underlined-link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="space-y-6">
            <div className="space-y-3">
                <p>
                    <b>Graduated in Computer Science</b> with{" "}
                    <b>First-Class Honours.</b>
                </p>
                <p>
                    Currently <b>located in Sheffield, UK.</b>
                </p>
                <p>
                    Possess industry and personal project experience in
                    full-stack app development using <b>Next.js (React)</b>,{" "}
                    <b>TypeScript</b>, <b>Python</b>, and <b>Java</b>.
                </p>
                <p>
                    Currently on the lookout for{" "}
                    <b>graduate and junior roles in tech.</b>
                </p>
                <p>
                    In the meantime, developing and freelancing{" "}
                    <b>custom AI agents and workflows.</b>
                </p>
                <p>
                    Please contact me at <b>hmw.geo@gmail.com.</b>
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
                            src="/images/icons/tairun.png"
                            height={60}
                            width={60}
                            alt="tairun logo"
                            className="inline-block"
                        />
                        : AI agent workflow for streamline job search journey.
                    </span>
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
                        : <b>company website</b> for precision engineering firm.{" "}
                        <UnderlinedLink
                            href="https://ktoolengineering.com"
                            newTab
                            blue
                        >
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
                        : <b>app</b> for efficient event management.{" "}
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
                        : <b>dissertation project</b> on visualising mobility
                        data for treating multiple sclerosis.{" "}
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
                        : <b>software engineering internship</b> at UK prop-tech
                        firm.{" "}
                        <UnderlinedLink
                            href="https://www.goodlord.co/"
                            newTab
                            blue
                        >
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
                        : seasonal <b>production and admin</b> employee at
                        Malaysian packaging and printing company.
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
                        : <b>2025 Computer Science graduate</b> at The
                        University of Sheffield with{" "}
                        <b>First-Class Honours (80% average).</b>
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
                        : completed 35/45 points{" "}
                        <b>
                            (HL Maths AA, Computer Science, Economics: 6, 6, 6)
                        </b>{" "}
                        (SL English, German, Film: 5, 5, 5) at The International
                        School of Penang (Uplands).
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
                        : finished <b>IGCSEs</b> with{" "}
                        <b>8 A*&apos;s and 2 A&apos;s.</b>
                    </span>
                </p>
            </div>
        </div>
    );
}
