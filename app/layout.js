"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GabrielDevs",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
