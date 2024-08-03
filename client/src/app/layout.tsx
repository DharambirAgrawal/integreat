import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/app/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InteGreat - Workforce Solutions in Dallas, Texas",
  description:
    "InteGreat offers quality virtual global talent and teams with huge cost savings and efficiency. Specializing in remote Accounting and IT professionals for US firms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="bg-gray-100">{children}</main>
      </body>
    </html>
  );
}
