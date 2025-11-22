import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ViewModeProvider } from "@/context/ViewModeContext";
import StatsPanel from "@/components/ui/StatsPanel";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Yash Shah | AI Engineer & Full-Stack Developer",
  description: "Portfolio of Yash Shah, an AI Engineer building agents and full-stack systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white antialiased`}>
        <ViewModeProvider>
          <Navbar />
          {children}
          <StatsPanel />
          <Footer />
        </ViewModeProvider>
      </body>
    </html>
  );
}
