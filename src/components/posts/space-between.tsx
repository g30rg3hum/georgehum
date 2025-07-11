interface Props {
  children: React.ReactNode;
}
export default function SpaceBetween({ children }: Props) {
  return <div className="space-y-3">{children}</div>;
}
