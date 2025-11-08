import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/logo";

export const metadata: Metadata = {
  title: "AI Chatbot - PDF Q&A AI Application",
  description: "Chat with AI powered by Claude. Ask questions about your PDFs in natural language.",
};

export default function ChatbotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <Link
            href="/"
            className="transition-opacity hover:opacity-80"
          >
            <Logo size="sm" />
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
