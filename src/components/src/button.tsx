export function Button(props: { children?: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  /* === props === */
  const { children, className, ...rest } = props;

  /* === return === */
  return (
    <button
      className={`bg-zinc-800 border border-zinc-500 rounded-md px-3 py-2 cursor-pointer hover:opacity-70 transition ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
