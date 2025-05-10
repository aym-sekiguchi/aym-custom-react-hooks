import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Card, CardDescription, CardHeader, Layout, PageTitle } from "@/components";

import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <PageTitle>Hooks</PageTitle>
      <Card href="/useToggle/">
        <CardHeader>useToggle</CardHeader>
        <CardDescription>A custom hook that manages a boolean state and provides a toggle function.</CardDescription>
      </Card>
    </Layout>
  </StrictMode>
);
