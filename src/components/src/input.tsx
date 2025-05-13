export function Input(props: React.HTMLProps<HTMLInputElement>) {
  /* === props === */
  const { className, ...rest } = props;

  /* === return === */
  return (
    <input
      {...rest}
      className={`border border-zinc-500 rounded-md px-3 focus-visible:outline-0 focus-visible:border-blue-500 focus-visible:border-2 h-[2em] ${className}`}
    />
  );
}
