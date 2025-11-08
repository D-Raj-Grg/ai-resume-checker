import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "PDF Q&A Assistant - AI-Powered Document Analysis",
  description: "Upload any PDF and ask questions in natural language. Get instant, accurate answers powered by Claude AI. Perfect for research, studying, and professional document analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
