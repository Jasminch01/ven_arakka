import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ven. Arrakkha - Portfolio & Reflections",
  description: "The official portfolio and blog of Ven. Arrakkha, sharing wisdom and reflections.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
