import { useState } from "react";
import { CodeBlock } from "./code-block";

export function Sample(props: {
  preview: React.ReactNode;
  code: string;
  hook: { [key in "simple" | "memoized"]: string };
}) {
  /* === props === */
  const { code, preview, hook } = props;

  /* === types === */
  type Active = "Preview" | "Code" | "Hook(simple)" | "Hook(memoized)";

  /* === hooks === */
  const [active, setActive] = useState<Active>("Preview");

  const items: Active[] = ["Preview", "Code", "Hook(simple)", "Hook(memoized)"];

  /* === return === */
  return (
    <>
      <div className="bg-zinc-900 border border-zinc-500 rounded-t-md p-2">
        <div className="bg-zinc-800 border border-zinc-500 rounded-md w-fit">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item)}
              className={`px-4 py-1 font-semibold relative -my-px -ml-px border ${
                active === item ? "bg-zinc-900 border-zinc-400 rounded-md" : "border-transparent cursor-pointer"
              }`}
            >
              {item}
              <span className="absolute inset-y-0 -right-px block h-[1rem] w-px bg-zinc-400 m-auto" />
            </button>
          ))}
        </div>
      </div>
      <div className="border-x border-b border-zinc-500 rounded-b-md py-2 px-4 md:px-6 relative">
        {active === "Preview" ? (
          preview
        ) : active === "Code" ? (
          <CodeBlock>{code}</CodeBlock>
        ) : active === "Hook(simple)" ? (
          <CodeBlock>{hook.simple}</CodeBlock>
        ) : (
          <CodeBlock>{hook.memoized}</CodeBlock>
        )}
      </div>
    </>
  );
}
