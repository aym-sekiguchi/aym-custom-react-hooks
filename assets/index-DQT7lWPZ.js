import{r as o,j as e,c as i,L as p,P as c}from"./globals-DBwl1A1T.js";import{B as u,H as g,S as m}from"./hook-description-BL6b1vNw.js";function f(n){const[t,s]=o.useState(n),a=o.useCallback(l=>s(typeof l=="boolean"?l:r=>!r),[]);return[t,a]}function v(){const[n,t]=f(!1);return e.jsxs("div",{className:"py-10 flex flex-col items-center",children:[e.jsx(u,{onClick:t,children:"Toggle"}),e.jsxs("p",{className:"pt-2",children:["stateの値：",n.toString()]})]})}const d=`import { Button } from "@/components";
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
`,x=`import { useState } from "react";

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
`,b=`import { useCallback, useState } from "react";

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
`;i.createRoot(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsxs(p,{children:[e.jsx(c,{children:"useToggle"}),e.jsxs(g,{children:[e.jsx("strong",{children:"useToggle"})," は、真偽値の状態を切り替えるカスタムフックです。"]}),e.jsx(m,{preview:e.jsx(v,{}),code:d,hook:{memoized:b,simple:x}})]})}));
