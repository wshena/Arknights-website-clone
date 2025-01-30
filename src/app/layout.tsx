import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollDownArrow from "./components/ScrollDownArrow";
import AppProvider from "./components/providers/AppProvider";
import ProgressBarProvider from "./components/ProgressBarProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswaldMedium = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Arknights",
  description: "Arknights website clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`overflow-x-hidden ${geistSans.variable} ${oswaldMedium.variable} ${geistMono.variable} antialiased`}
      >
        <ProgressBarProvider >
          <AppProvider>
            <>
              <Navbar />
              
              {children}

              {/* arrow */}
              <ScrollDownArrow />
            </>
          </AppProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
