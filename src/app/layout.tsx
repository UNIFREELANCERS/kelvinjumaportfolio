import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kelvin Oluoch Juma | Full-Stack Developer, Data Engineer & AI Evaluator",
  description: "Portfolio of Kelvin Oluoch Juma, a Kenyan full-stack web developer, data engineer and AI evaluator with experience in web applications, APIs, structured data and AI training and evaluation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="overflow-x-hidden">
          {children}
          {process.env.VERCEL === '1' && <Analytics />}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
