export function Card(props: { children?: React.ReactNode; href?: string } & React.HTMLProps<HTMLAnchorElement>) {
  /* === props === */
  const { children, href, className, ...rest } = props;

  /* === return === */
  return (
    <div className="py-2">
      <a
        href={href}
        className={`${!href ? "contents pointer-events-none" : "transition hover:brightness-70"} ${className}`}
        {...rest}
      >
        <div className="bg-zinc-900 border border-zinc-500 rounded-md px-4 py-6 ">{children}</div>
      </a>
    </div>
  );
}

export function CardHeader(props: { children?: React.ReactNode } & React.HTMLProps<HTMLHeadingElement>) {
  /* === props === */
  const { children, className, ...rest } = props;

  /* === return === */
  return (
    <h3 className={`font-semibold ${className}`} {...rest}>
      {children}
    </h3>
  );
}

export function CardDescription(props: { children?: React.ReactNode } & React.HTMLProps<HTMLDivElement>) {
  /* === props === */
  const { children, className, ...rest } = props;

  /* === return === */
  return (
    <div className={`pt-2 ${className}`} {...rest}>
      {children}
    </div>
  );
}
