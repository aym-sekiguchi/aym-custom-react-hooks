import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Card, CardDescription, CardHeader, Layout, PageTitle } from "@/components";

import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <PageTitle>Hooks</PageTitle>
      <Card href="/aym-custom-react-hooks/useToggle/">
        <CardHeader>useToggle</CardHeader>
        <CardDescription>
          <strong>useToggle</strong> は、真偽値の状態を切り替えるカスタムフックです。
        </CardDescription>
      </Card>
      <Card href="/aym-custom-react-hooks/useDebounce/">
        <CardHeader>useDebounce</CardHeader>
        <CardDescription>
          <strong>useDebounce</strong> は、指定した遅延時間の後に値を更新するカスタムフックです。
        </CardDescription>
      </Card>
    </Layout>
  </StrictMode>
);
