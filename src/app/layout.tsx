import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import { Header } from "@/shared/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "となりの履歴書",
    template: "%s | となりの履歴書",
  },
  description: "これは、あなたの経歴をもとに、もしもの履歴書を生成するアプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "bg-primary hover:bg-primary/90 text-sm normal-case shadow-none",
          userButtonAvatarBox: "w-8 h-8",
          userButtonPopoverCard: "shadow-lg",
        },
      }}
    >
      <html lang="ja">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
          <main className="flex-1 py-4 md:py-8 px-6 mx-auto">{children}</main>
          <Toaster position="top-right" richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
