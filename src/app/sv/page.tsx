import type { Metadata } from "next";

import HomePage from "../[locale]/page";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: siteContent.sv.meta.title,
  description: siteContent.sv.meta.description,
};

export default function SvPage() {
  return <HomePage params={{ locale: "sv" }} />;
}
