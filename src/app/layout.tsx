import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // URL atual do deploy. Trocar quando houver domínio próprio.
  metadataBase: new URL("https://portfolio-ten-psi-gcohgte9fy.vercel.app"),
  title: "Marcos Teodoro — Senior Full-Stack Software Engineer",
  description:
    "Portfolio of Marcos Teodoro, Senior Full-Stack Software Engineer working with Node.js, TypeScript, React, Next.js and cloud technologies.",
  keywords: [
    "Marcos Teodoro",
    "Full-Stack Developer",
    "Software Engineer",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Marcos Teodoro" }],
  openGraph: {
    title: "Marcos Teodoro — Senior Full-Stack Software Engineer",
    description:
      "Senior Full-Stack Software Engineer — Node.js, TypeScript, React, Next.js and cloud.",
    type: "website",
    url: "/",
  },
};

/**
 * Script anti-FOUC: roda antes da hidratação para aplicar o tema correto
 * (localStorage → preferência do sistema → dark), evitando o "flash" do
 * tema errado no carregamento. Fail secure: qualquer erro cai no default.
 */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("portfolio:theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    root.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
