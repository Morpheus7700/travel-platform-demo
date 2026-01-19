import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NomadLux | Premium Travel Experiences",
  description: "Redefining luxury travel through personalized experiences and seamless digital innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}