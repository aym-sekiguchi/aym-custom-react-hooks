export function Card(props: { children?: React.ReactNode; href?: string }) {
  /* === props === */
  const { children, href } = props;

  /* === return === */
  return (
    <div className="py-2">
      <a href={href} className={!href ? "contents pointer-events-none" : "transition hover:brightness-70"}>
        <div className="bg-zinc-900 border border-zinc-500 rounded-md px-4 py-6 ">{children}</div>
      </a>
    </div>
  );
}

export function CardHeader(props: { children?: React.ReactNode }) {
  /* === props === */
  const { children } = props;

  /* === return === */
  return <h3 className="font-semibold">{children}</h3>;
}

export function CardDescription(props: { children?: React.ReactNode }) {
  /* === props === */
  const { children } = props;

  /* === return === */
  return <p className="pt-2">{children}</p>;
}
