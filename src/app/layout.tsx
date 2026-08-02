import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tharun Hrithick SR | AI Agent & Backend Developer",
  description:
    "Portfolio of Tharun Hrithick SR — AI Agent & Backend Developer. Fourth-year B.Tech ISE student building intelligent agents, RAG pipelines and GenAI products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-ink font-sans text-zinc-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
