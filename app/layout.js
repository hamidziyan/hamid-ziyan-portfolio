import "./globals.css";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import { profile } from "@/data/content";

const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.positioning,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
