"use client";

import clsx from "clsx";
import Link from "next/link";

interface Props {
  href: string;
  newTab?: boolean;
  className?: string;
  download?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
export default function UnderlinedLink({
  href,
  newTab,
  className,
  download,
  onClick,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className={clsx("hover:underline", className)}
      target={newTab ? "_blank" : undefined}
      onClick={onClick}
      download={download}
    >
      {children}
    </Link>
  );
}
