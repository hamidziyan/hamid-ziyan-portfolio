import "./globals.css";
import { profile } from "@/data/content";

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.positioning,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        "--font-mono": "ui-monospace, SFMono-Regular, Menlo, monospace",
        "--font-body": "Arial, Helvetica, sans-serif",
      }}
    >
      <body>{children}</body>
    </html>
  );
}
