import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "LifeLens – AI Smart Assistive Goggles for Blind and Deaf People | Code Paglu's",
  description:
    "AI-powered smart goggles with computer vision, ultrasonic distance sensing, MPU6050 motion detection, speech recognition, and real-time Raspberry Pi processing. Help blind users navigate safely and deaf users understand conversations. Built by Code Paglu's.",
  keywords: ["LifeLens", "AI", "smart goggles", "accessibility", "blind", "deaf", "assistive technology"],
  openGraph: {
    title: "LifeLens – AI Smart Goggles for Accessibility",
    description:
      "AI-powered smart goggles with computer vision, ultrasonic and motion sensors, speech-to-text, and real-time processing. Navigation, captions, and safety for blind and deaf users.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
