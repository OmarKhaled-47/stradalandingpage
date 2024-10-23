import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const montserrat = localFont({
//   src: "./fonts/Montserrat-VariableFont_wght.ttf",
//   variable: "--font-montserrat",
//   weight: "100 900",
// });
const Arial = localFont({
  src: "./fonts/Arial.ttf",
  variable: "--font-Arial",
});

export const metadata: Metadata = {
  title: "STRADA Real Estate",
  description: "Strada Properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${Arial.variable} antialiased`}>{children}</body>
    </html>
  );
}
