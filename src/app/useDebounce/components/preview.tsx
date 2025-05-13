import { Button, Input } from "@/components";
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
