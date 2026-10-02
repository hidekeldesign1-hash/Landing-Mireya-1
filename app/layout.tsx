import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteDescription =
  "Odontopediatra en San José Insurgentes, Benito Juárez, CDMX. Atención dental para niños con Ana Karen. Agenda por WhatsApp.";

export const metadata: Metadata = {
  title: "Ana Karen | Odontopediatra en San José Insurgentes",
  description: siteDescription,
  openGraph: {
    title: "Ana Karen | Odontopediatra en San José Insurgentes",
    description: siteDescription,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Karen | Odontopediatra en San José Insurgentes",
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
      <body className="min-h-screen bg-[#fff6ee] font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
