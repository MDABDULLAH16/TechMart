import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
 
 
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TechMart - Best Tech and Gadget Store",
  description: "Discover the latest technology, gadgets, and smart solutions at TechMart. Your one-stop destination for smartphones, laptops, gaming gear, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableTransitionOnChange
          storageKey="techmart-theme"
        >
          <Navbar />
          <main className="pt-16 lg:pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
