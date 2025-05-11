import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HookDescription, Layout, PageTitle, Sample } from "@/components";
import { Preview } from "./components/preview";

import code from "./components/preview.tsx?raw";
import simple from "@/hooks/useToggle/useToggle.ts?raw";
import memoized from "@/hooks/useToggle/useToggle.memoized.ts?raw";

import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <PageTitle>useToggle</PageTitle>
      <HookDescription>
        <strong>useToggle</strong> は、真偽値の状態を切り替えるカスタムフックです。
      </HookDescription>
      <Sample preview={<Preview />} code={code} hook={{ memoized, simple }} />
    </Layout>
  </StrictMode>
);
