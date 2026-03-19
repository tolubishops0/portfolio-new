import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ParticleBackground } from "@/components/particle-component";

const fontsMain = Roboto({ subsets: ["latin"] });
const fontSub = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToluBishops",
  description:
    "Software developer specialising in React, Next.js, and modern web architecture. Building things for the web.",

  icons: {
    icon: [
      {
        url: "/icon-darkk.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon-darkk.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontsMain.className} ${fontSub.className} antialiased bg-background text-foreground`}
      >
        <ParticleBackground />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
