import clsx from "clsx";
import Link from "next/link";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}
export default function UnderlinedLink({ href, className, children }: Props) {
  return (
    <Link href={href} className={clsx("hover:underline", className)}>
      {children}
    </Link>
  );
}
