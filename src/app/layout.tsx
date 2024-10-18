import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import SmoothScrolling from "@/components/react-lenis";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meethub",
  description:
    "Meethub is a place where you can attend various meethub and events and meet new people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>{children}</SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
