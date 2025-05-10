import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/globals.css";
import { Layout, PageTitle } from "@/components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <PageTitle>useToggle</PageTitle>
    </Layout>
  </StrictMode>
);
