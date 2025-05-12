import{j as e,r as a,c as g,L as m,P as x}from"./globals-BGGALHfW.js";function p(t){const{children:n,className:o,...s}=t;return e.jsx("button",{className:`bg-zinc-800 border border-zinc-500 rounded-md px-3 py-2 ${o}`,...s,children:n})}function c(t){const{children:n,className:o,...s}=t;return e.jsxs("div",{className:`overflow-x-hidden group ${o}`,...s,children:[e.jsx(p,{onClick:()=>navigator.clipboard.writeText(String(n)),className:"absolute top-2 right-2 !p-0 size-10 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition cursor-pointer",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"})})}),e.jsx("pre",{className:"overflow-x-auto pb-4",children:n})]})}function v(t){const{code:n,preview:o,hook:s}=t,[r,l]=a.useState("Preview"),u=["Preview","Code","Hook(simple)","Hook(memoized)"];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-zinc-900 border border-zinc-500 rounded-t-md p-2",children:e.jsx("div",{className:"bg-zinc-800 border border-zinc-500 rounded-md w-fit -mr-px",children:u.map((i,d)=>e.jsxs("button",{onClick:()=>l(i),className:`px-4 py-1 font-semibold relative -m-px border group ${r===i?"bg-zinc-900 border-zinc-400 rounded-md":"border-transparent cursor-pointer"}`,children:[i,e.jsx("span",{className:"absolute inset-y-0 -right-px block h-[1rem] w-px bg-zinc-400 m-auto group-last-of-type:hidden"})]},d))})}),e.jsx("div",{className:"border-x border-b border-zinc-500 rounded-b-md py-2 px-4 md:px-6 relative",children:r==="Preview"?o:r==="Code"?e.jsx(c,{children:n}):r==="Hook(simple)"?e.jsx(c,{children:s.simple}):e.jsx(c,{children:s.memoized})})]})}function b(t){const{children:n,className:o,...s}=t;return e.jsx("div",{className:`mb-2 text-zinc-400 ${o}`,...s,children:e.jsx("p",{children:n})})}function f(t){const[n,o]=a.useState(t),s=a.useCallback(r=>o(typeof r=="boolean"?r:l=>!l),[]);return[n,s]}function h(){const[t,n]=f(!1);return e.jsxs("div",{className:"py-10 flex flex-col items-center",children:[e.jsx(p,{onClick:n,children:"Toggle"}),e.jsxs("p",{className:"pt-2",children:["stateの値：",t.toString()]})]})}const j=`import { Button } from "@/components";
import { useToggle } from "@/hooks/useToggle/useToggle.memoized";

export function Preview() {
  /* === hooks === */
  const [state, toggle] = useToggle(false);

  /* === return === */
  return (
    <div className="py-10 flex flex-col items-center">
      <Button onClick={toggle}>Toggle</Button>
      <p className="pt-2">stateの値：{state.toString()}</p>
    </div>
  );
}
`,y=`import { useState } from "react";

/**
 * useToggle は、真偽値の状態を管理・切り替えるためのカスタム React フックです。
 *
 * @param {Object} props - オプションの初期値を含むオブジェクト
 * @param {boolean} [props.value] - 初期状態の値（true または false）。指定がない場合は false。
 * @returns {[boolean, (value?: any) => void]} - 現在の状態と、状態を切り替える関数の配列。
 *   - 状態は true / false の boolean 値
 *   - toggle 関数は引数を与えないと状態を反転し、true または false を与えるとその値に設定します。
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useToggle(props: { value?: boolean }): [boolean, (value?: any) => void] {
  /* === props === */
  const { value } = props;

  const [state, setState] = useState(value !== undefined ? value : false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggle = (value: any) => (typeof value === "boolean" ? setState(value) : setState((prev) => !prev));

  return [state, toggle] as const;
}
`,k=`import { useCallback, useState } from "react";

/**
 * useToggle は、真偽値の状態を管理・切り替えるためのカスタム React フックです。
 *
 * このバージョンでは toggle 関数を useCallback によりメモ化しています。
 * React Compiler を使用しない環境（React 18 以前など）での使用を想定しています。
 *
 * @param {Object} props - オプションの初期値を含むオブジェクト
 * @param {boolean} [props.value] - 初期状態の値（true または false）。指定がない場合は false。
 * @returns {[boolean, (value?: any) => void]} - 現在の状態と、状態を切り替える関数の配列。
 *   - 状態は true / false の boolean 値
 *   - toggle 関数は引数を与えないと状態を反転し、true または false を与えるとその値に設定します。
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useToggle(value?: boolean): [boolean, (value?: any) => void] {
  const [open, setOpen] = useState(value !== undefined ? value : false);

  const toggle = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (value: any) => (typeof value === "boolean" ? setOpen(value) : setOpen((prev) => !prev)),
    []
  );

  return [open, toggle] as const;
}
`;g.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsxs(m,{children:[e.jsx(x,{children:"useToggle"}),e.jsxs(b,{children:[e.jsx("strong",{children:"useToggle"})," は、真偽値の状態を切り替えるカスタムフックです。"]}),e.jsx(v,{preview:e.jsx(h,{}),code:j,hook:{memoized:k,simple:y}})]})}));
