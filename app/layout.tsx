import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soleaf Energy & ESH Solutions",
  description: "Empowering Industrial Wellbeing through Expert Health Checkups",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://cdn.emailjs.com/dist/email.min.js" />
        <title>Soleaf Energy | EHS & Solar Solutions</title>
        <meta
          name="description"
          content="Soleaf Energy provides industry-leading EHS solutions and solar energy systems for a sustainable future. Serving 100+ industries, 12,500+ employees."
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
