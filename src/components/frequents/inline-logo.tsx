import clsx from "clsx";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width?: number;
  align?: "middle" | "top";
}

export default function InlineLogo({
  src,
  alt,
  width = 18,
  align = "top",
}: Props) {
  return (
    <Image
      height="0"
      width={width}
      src={src}
      alt={alt}
      className={clsx("inline-block", {
        "align-text-middle": align === "middle",
        "align-text-top": align === "top",
      })}
    />
  );
}
