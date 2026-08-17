import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MouseFollower from "@/components/MouseFollower";
import ChatBot from "@/components/ChatBot";
import { Toaster } from "@/components/ui/sonner";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Tawsif - Full Stack Developer Portfolio",
  description: "Crafting modern, responsive, and user-friendly websites with passion and precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <MotionConfig reducedMotion="user">
          <SmoothScroll>
            <MouseFollower />
            {children}
            <ChatBot />
          </SmoothScroll>
        </MotionConfig>
        <Toaster theme="dark" position="bottom-right" richColors />
      </body>
    </html>
  );
}
