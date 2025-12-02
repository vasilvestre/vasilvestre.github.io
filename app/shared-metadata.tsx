import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://vasilvestre.github.io/"),
  title: {
    default: "Valentin Silvestre",
    template: "%s | Valentin Silvestre",
  },
  description: "Développeur web passionné par PHP, Symfony et Sylius. Blog et portfolio de Valentin Silvestre.",
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Valentin Silvestre",
  },
  twitter: {
    card: "summary",
    creator: "@ValentinSilves",
  },
};
