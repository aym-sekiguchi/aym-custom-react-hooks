import { useEffect, useRef, useState } from "react";

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
