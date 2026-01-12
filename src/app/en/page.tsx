import type { Metadata } from "next";

import HomePage from "../[locale]/page";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: siteContent.en.meta.title,
  description: siteContent.en.meta.description,
};

export default function EnPage() {
  return <HomePage params={{ locale: "en" }} />;
}
