interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}
export default function Modal({ id, title, children }: Props) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold">{title}</h3>
        <div className="pt-4">{children}</div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
