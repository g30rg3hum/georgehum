interface Props {
  href: string;
  children: React.ReactNode;
}
export default function UnderlinedLink({ href, children }: Props) {
  return (
    <a href={href} className="hover:underline">
      {children}
    </a>
  );
}
