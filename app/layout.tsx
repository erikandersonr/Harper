import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TimerProvider } from "@/components/timer-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casey's BCG - HarperAI",
  description: "Clone of BCG Casey Chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TimerProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </TimerProvider>
  );
}
