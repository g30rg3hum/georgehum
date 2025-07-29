"use client";

import clsx from "clsx";
import Link from "next/link";

interface Props {
  href: string;
  newTab?: boolean;
  className?: string;
  download?: boolean;
  blue?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
export default function UnderlinedLink({
  href,
  newTab,
  className,
  download,
  blue,
  onClick,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className={clsx("hover:underline", blue && "text-sky-500", className)}
      target={newTab ? "_blank" : undefined}
      onClick={onClick}
      download={download}
    >
      {children}
    </Link>
  );
}
