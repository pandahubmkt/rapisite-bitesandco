import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bites&co | Cookies New York Style",
  description: "Cookies New York style, quentinho por delivery. Peça agora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-cream-50 text-brown-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
