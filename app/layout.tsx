import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
    <html lang="es" className={montserrat.variable}>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
