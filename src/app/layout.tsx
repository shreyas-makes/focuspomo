import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  title: "Simple Focus Timer",
  description: "A Pomodoro-style focus timer application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ubuntu.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
