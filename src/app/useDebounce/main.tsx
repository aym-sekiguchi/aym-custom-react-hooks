import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HookDescription, Layout, PageTitle, Sample } from "@/components";
import { Preview } from "./components/preview";

import code from "./components/preview.tsx?raw";
import simple from "@/hooks/useDebounce/useDebounce.ts?raw";
import memoized from "@/hooks/useDebounce/useDebounce.memoized.ts?raw";

import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <PageTitle>useDebounce</PageTitle>
      <HookDescription>
        <strong>useDebounce</strong> は、指定した遅延時間の後に値を更新するカスタムフックです。
      </HookDescription>
      <Sample preview={<Preview />} code={code} hook={{ simple, memoized }} />
    </Layout>
  </StrictMode>
);
