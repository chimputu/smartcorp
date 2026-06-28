// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "SmartCorp",
  description: "ICT Zambian company tasked to provide ICT services",
  icons: {
    icon: "/smart.png",      // Browser tab icon (32x32 recommended)
    shortcut: "/smart.png",
    apple: "/smart-apple.png", // Optional: 180x180 for iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-blue-500">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}