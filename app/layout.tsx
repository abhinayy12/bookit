import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = { title: "BookIt", description: "Experiences & Slots" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 md:px-6 pb-16">{children}</main>
      </body>
    </html>
  );
}