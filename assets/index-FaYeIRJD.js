import{j as e,r as u,c as d,L as i,P as m}from"./globals-DBwl1A1T.js";import{B as r,H as f,S as b}from"./hook-description-BL6b1vNw.js";function p(n){const{className:t,...o}=n;return e.jsx("input",{...o,className:`border border-zinc-500 rounded-md px-3 focus-visible:outline-0 focus-visible:border-blue-500 focus-visible:border-2 h-[2em] ${t}`})}function h(n,t){const[o,l]=u.useState(n),c=u.useRef(null),a=u.useCallback(()=>{clearTimeout(c.current||void 0)},[]),s=u.useCallback(()=>{clearTimeout(c.current||void 0),l(n)},[n]);return u.useEffect(()=>(c.current=setTimeout(()=>{l(n)},t),()=>clearTimeout(c.current||void 0)),[n,t]),{debouncedValue:o,cancel:a,flush:s}}function v(){const[n,t]=u.useState(""),o=s=>{t(s.target.value)},{debouncedValue:l,cancel:c,flush:a}=h(n,1e3);return e.jsxs("div",{className:"py-10 flex flex-col items-center gap-3",children:[e.jsx(p,{onChange:o}),e.jsxs("div",{className:"flex  items-center gap-8",children:[e.jsx(r,{onClick:c,children:"キャンセル"}),e.jsx(r,{onClick:a,children:"すぐに反映"})]}),e.jsxs("p",{style:{overflowWrap:"anywhere"},children:["debouncedValue:",l]})]})}const x=`import { Button, Input } from "@/components";
import { useDebounce } from "@/hooks/useDebounce/useDebounce.memoized";
import { useState } from "react";

export function Preview() {
  /* === hooks === */
  const [value, setValue] = useState("");

  /* === functions === */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { debouncedValue, cancel, flush } = useDebounce<string>(value, 1000);

  /* === return === */
  return (
    <div className="py-10 flex flex-col items-center gap-3">
      <Input onChange={handleChange} />
      <div className="flex  items-center gap-8">
        <Button onClick={cancel}>キャンセル</Button>
        <Button onClick={flush}>すぐに反映</Button>
      </div>
      <p style={{ overflowWrap: "anywhere" }}>debouncedValue:{debouncedValue}</p>
    </div>
  );
}
`,T=`import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DebounceReturn<T> = { debouncedValue: T; cancel: (e: any) => void; flush: (e: any) => void };

/**
 * useDebounce は、指定した遅延時間の後に値を更新するカスタム React フックです。
 * 入力の変化が一定時間続かなかった場合にのみ状態を反映することで、
 * 無駄な処理（例：API呼び出しなど）を抑制するのに役立ちます。
 *
 * @template T - デバウンス対象となる値の型
 * @param {T} value - デバウンス対象の値
 * @param {number} delay - 値の更新を遅らせる時間（ミリ秒）
 * @returns {{ debouncedValue: T, cancel: (e: any) => void, flush: (e: any) => void }}
 *   - debouncedValue: 遅延後に更新される値
 *   - cancel: 保留中の更新をキャンセルする関数
 *   - flush: 保留中の更新を即座に反映させる関数
 */

export function useDebounce<T>(value: T, delay: number): DebounceReturn<T> {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const cancel = () => {
    clearTimeout(timeoutId.current || undefined);
  };

  const flush = () => {
    clearTimeout(timeoutId.current || undefined);
    setDebouncedValue(value);
  };

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // cleanup
    return () => clearTimeout(timeoutId.current || undefined);
  }, [value, delay]);

  return { debouncedValue, cancel, flush };
}
`,y=`import { useCallback, useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DebounceReturn<T> = { debouncedValue: T; cancel: (e: any) => void; flush: (e: any) => void };

/**
 * useDebounce は、指定した遅延時間の後に値を更新するカスタム React フックです。
 * 入力の変化が一定時間続かなかった場合にのみ状態を反映することで、
 * 無駄な処理（例：API呼び出しなど）を抑制するのに役立ちます。
 *
 * このバージョンでは cancel 関数と flush 関数を useCallback によりメモ化しています。
 * React Compiler を使用しない環境（React 18 以前など）での使用を想定しています。
 *
 * @template T - デバウンス対象となる値の型
 * @param {T} value - デバウンス対象の値
 * @param {number} delay - 値の更新を遅らせる時間（ミリ秒）
 * @returns {{ debouncedValue: T, cancel: (e: any) => void, flush: (e: any) => void }}
 *   - debouncedValue: 遅延後に更新される値
 *   - cancel: 保留中の更新をキャンセルする関数
 *   - flush: 保留中の更新を即座に反映させる関数
 */

export function useDebounce<T>(value: T, delay: number): DebounceReturn<T> {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const cancel = useCallback(() => {
    clearTimeout(timeoutId.current || undefined);
  }, []);

  const flush = useCallback(() => {
    clearTimeout(timeoutId.current || undefined);
    setDebouncedValue(value);
  }, [value]);

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // cleanup
    return () => clearTimeout(timeoutId.current || undefined);
  }, [value, delay]);

  return { debouncedValue, cancel, flush };
}
`;d.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsxs(i,{children:[e.jsx(m,{children:"useDebounce"}),e.jsxs(f,{children:[e.jsx("strong",{children:"useDebounce"})," は、指定した遅延時間の後に値を更新するカスタムフックです。"]}),e.jsx(b,{preview:e.jsx(v,{}),code:x,hook:{simple:T,memoized:y}})]})}));
