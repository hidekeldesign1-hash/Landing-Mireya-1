import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteDescription =
  "Consultorio dental RM SONRISAS en la Colonia del Valle, Benito Juárez, CDMX. Ortodoncia con el Dr. Ricardo Mayo y la Dra. Montserrat. Agenda por WhatsApp.";

export const metadata: Metadata = {
  title: "RM SONRISAS | Consultorio dental en Del Valle, CDMX",
  description: siteDescription,
  openGraph: {
    title: "RM SONRISAS | Consultorio dental en Del Valle",
    description: siteDescription,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RM SONRISAS | Consultorio dental en Del Valle",
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
