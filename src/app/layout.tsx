import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"; // Corrected imports
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"]
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "Rishik Kumar Chaurasiya | Full-Stack Developer | IIT Patna",
  description: "Full-Stack Developer specializing in MERN stack, AI/ML integration, and scalable web applications. Currently at IIT Patna.",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Node.js", "AI ML", "IIT Patna", "Rishik Kumar Chaurasiya"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-dark-900 text-slate-200`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
