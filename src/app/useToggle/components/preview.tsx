import { Button } from "@/components";
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
