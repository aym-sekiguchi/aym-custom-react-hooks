import { Header, Footer } from "../";

export function Layout(props: { children?: React.ReactNode }) {
  /* === props === */
  const { children } = props;

  /* === return === */
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <main className="flex-1 container pt-6">{children}</main>
      <Footer />
    </div>
  );
}
