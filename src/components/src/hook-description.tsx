export function HookDescription(props: { children?: React.ReactNode } & React.HTMLProps<HTMLDivElement>) {
  /* === props === */
  const { children, className, ...rest } = props;

  /* === return === */
  return (
    <div className={`mb-2 text-zinc-400 ${className}`} {...rest}>
      <p>{children}</p>
    </div>
  );
}
