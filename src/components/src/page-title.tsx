export function PageTitle(props: { children?: string }) {
  /* === props === */
  const { children } = props;

  /* === return === */
  return <h2 className="my-2 text-2xl font-semibold">{children}</h2>;
}
