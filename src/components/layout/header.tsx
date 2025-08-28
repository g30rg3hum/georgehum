"use client";

import { Bars3Icon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useState } from "react";
import UnderlinedLink from "../frequents/underlined-link";
// import Modal from "../frequents/modal";

export default function Header() {
  const [navOpen, setNavOpen] = useState(true);
  // const [modal, setModal] = useState<HTMLDialogElement | null>(null);

  // const resumeModalId = "resume-modal";
  // useEffect(() => {
  //   const modalElement = document.getElementById(
  //     resumeModalId
  //   ) as HTMLDialogElement;

  //   setModal(modalElement);
  // }, []);

  return (
    <div className="flex justify-between gap-5">
      <div className="flex flex-col">
        <h1 className="font-semibold text-lg">George Hum</h1>
      </div>

      <div className="relative sm:static flex gap-5">
        <button
          className="sm:hidden btn btn-sm btn-square rounded-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          <Bars3Icon className="size-3" />
        </button>
        <div
          className={clsx(
            navOpen
              ? "absolute sm:static block top-10 right-0 p-5 sm:p-0 bg-base-200 flex gap-6 sm:bg-transparent"
              : "hidden sm:flex gap-6"
          )}
        >
          <ul className="flex flex-col gap-1">
            <li>
              <UnderlinedLink href="/">Home</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="/who">Who?</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="/blog">Blog</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="/projects">Projects</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="/career">Career</UnderlinedLink>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li>
              <UnderlinedLink href="/resumes/george_hum_resume_1.pdf" download>
                Résumé
              </UnderlinedLink>
              {/* <Modal id={resumeModalId} title="Download my résumé">
                <div className="space-y-3">
                  <p>
                    I have two résumés, one for tech and the other for more
                    casual jobs. Pick your choosing!
                  </p>
                  <UnderlinedLink
                    download
                    href="/resumes/george_hum_resume_1.pdf"
                    className="text-sky-500"
                  >
                    Tech
                  </UnderlinedLink>
                  {"   "}
                  <UnderlinedLink
                    download
                    href="/resumes/george_hum_resume_2.pdf"
                    className="text-sky-500"
                  >
                    Casual
                  </UnderlinedLink>
                </div>
              </Modal> */}
            </li>
            <li>
              <UnderlinedLink href="https://github.com/g30rg3hum" newTab>
                GitHub
              </UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink
                href="https://www.linkedin.com/in/georgehum/"
                newTab
              >
                LinkedIn
              </UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="https://x.com/g3e0rg3e" newTab>
                X
              </UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink
                href="https://www.instagram.com/george_huum/"
                newTab
              >
                Instagram
              </UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="/contact">Contact</UnderlinedLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
