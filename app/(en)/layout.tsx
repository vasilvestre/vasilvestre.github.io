import "../globals.css";
import { SiteShell } from "@/components/site-shell";
import { baseMetadata } from "../shared-metadata";

export const metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
