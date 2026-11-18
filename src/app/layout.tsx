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
  title: "Kelvin Oluoch Juma | Full-Stack Web Developer & Digital Professional",
  description: "Portfolio of Kelvin Oluoch Juma, a Kenyan Full-Stack Web Developer with over four years of experience building websites, web applications and digital solutions.",
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
