// app/layout.js
import React from "react";
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust as needed
  variable: '--font-lato',
})


export const metadata = {
  title: "My App",
  description: "A working Next.js App Router site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
