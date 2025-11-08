import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbot - PDF Q&A Assistant",
  description: "Chat with AI powered by Claude. Ask questions about React, TypeScript, and more.",
};

export default function ChatbotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full overflow-hidden">
      {children}
    </div>
  );
}
