import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteDescription =
  "Clínica dental en Polanco, CDMX. Valoración, prevención y tratamientos con un equipo de especialistas. Agenda por WhatsApp.";

export const metadata: Metadata = {
  title: "BellaSmile | Clínica Dental en Polanco, CDMX",
  description: siteDescription,
  openGraph: {
    title: "BellaSmile | Clínica Dental en Polanco",
    description: siteDescription,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BellaSmile | Clínica Dental en Polanco",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-[#F2F4F7] font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
