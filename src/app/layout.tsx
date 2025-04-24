import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "@uploadthing/react/styles.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeAware",
  description: "Created by BNP-Team20",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body className="flex flex-col min-h-screen bg-gray-900">
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer/>
      </body>
    </html>
  );
}
