import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DM Ceuticals | La piel no es el enemigo. Es el mensajero.",
  description:
    "Comprende lo que tu piel intenta decirte. Sistemas integrales, evaluación Lenguaje de la Piel™ y acompañamiento personalizado con Mireya Díaz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
