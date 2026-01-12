import type { Metadata } from "next";

import {
  defaultLocale,
  locales,
  siteContent,
  type Locale,
} from "@/lib/site-content";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

const resolveLocale = async (
  params: Promise<{ locale: string }>
): Promise<Locale> => {
  const { locale } = await params;

  return isLocale(locale) ? locale : defaultLocale;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const meta = siteContent[locale].meta;

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const locale = await resolveLocale(params);

  return <div data-locale={locale}>{children}</div>;
}
