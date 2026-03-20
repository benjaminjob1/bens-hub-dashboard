import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ben's Hub",
  description: "Personal dashboard hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen grid-bg">
        {children}
      </body>
    </html>
  );
}
