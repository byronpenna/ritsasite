import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RITSA Electrónica | Tutoriales de reparación y proyectos",
  description:
    "Plataforma de aprendizaje de RITSA Electrónica: tutoriales de reparación de equipos electrónicos, proyectos con Arduino y ESP32, y contenido educativo de ingeniería electrónica.",
  keywords: [
    "RITSA Electrónica",
    "reparación de electrónicos",
    "tutoriales electrónica",
    "Arduino",
    "ESP32",
    "reparación de TV",
    "reparación de celulares",
  ],
  openGraph: {
    title: "RITSA Electrónica | Tutoriales de reparación y proyectos",
    description:
      "Aprende reparación de electrónicos y proyectos DIY con los tutoriales de RITSA Electrónica.",
    url: "https://www.youtube.com/@RITSAelectronica",
    siteName: "RITSA Electrónica",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
